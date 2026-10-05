'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

type Node = { x: number; y: number; vx: number; vy: number; r: number };
type Packet = { from: number; to: number; t: number; speed: number };

const LINK_DISTANCE = 140;
const POINTER_RADIUS = 180;

// Cursor-reactive node graph: nodes drift, link up when close, and "data packets"
// travel along the links. The pointer acts as an extra node that pulls nearby nodes in.
export function CloudNetwork({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const darkRef = useRef(true);
  darkRef.current = resolvedTheme !== 'light';

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: -9999, y: -9999, active: false };
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;

    const seed = () => {
      const count = Math.min(90, Math.max(28, Math.floor((width * height) / 14000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1,
      }));
      packets = [];
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const palette = () =>
      darkRef.current
        ? { node: '226, 232, 240', link: '106, 211, 255', accent: '139, 92, 246', packet: '249, 115, 22' }
        : { node: '15, 23, 42', link: '99, 102, 241', accent: '139, 92, 246', packet: '234, 88, 12' };

    const draw = () => {
      const c = palette();
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (!reduceMotion) {
          if (pointer.active) {
            const dx = pointer.x - n.x;
            const dy = pointer.y - n.y;
            const dist = Math.hypot(dx, dy);
            if (dist < POINTER_RADIUS && dist > 1) {
              n.vx += (dx / dist) * 0.012;
              n.vy += (dy / dist) * 0.012;
            }
          }
          n.vx *= 0.995;
          n.vy *= 0.995;
          const speed = Math.hypot(n.vx, n.vy);
          if (speed < 0.08) {
            n.vx += (Math.random() - 0.5) * 0.02;
            n.vy += (Math.random() - 0.5) * 0.02;
          }
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${c.link}, ${(1 - dist / LINK_DISTANCE) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            if (!reduceMotion && packets.length < 14 && Math.random() < 0.0006) {
              packets.push({ from: i, to: j, t: 0, speed: 0.008 + Math.random() * 0.012 });
            }
          }
        }
      }

      if (pointer.active) {
        for (const n of nodes) {
          const dist = Math.hypot(pointer.x - n.x, pointer.y - n.y);
          if (dist < POINTER_RADIUS) {
            ctx.strokeStyle = `rgba(${c.accent}, ${(1 - dist / POINTER_RADIUS) * 0.6})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(pointer.x, pointer.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
      }

      packets = packets.filter((p) => {
        const a = nodes[p.from];
        const b = nodes[p.to];
        p.t += p.speed;
        if (!a || !b || p.t >= 1 || Math.hypot(a.x - b.x, a.y - b.y) > LINK_DISTANCE) return false;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx.fillStyle = `rgba(${c.packet}, 0.9)`;
        ctx.shadowColor = `rgba(${c.packet}, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        return true;
      });

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${c.node}, 0.55)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (visible) draw();
      frame = requestAnimationFrame(loop);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = pointer.x >= 0 && pointer.y >= 0 && pointer.x <= rect.width && pointer.y <= rect.height;
      if (reduceMotion) draw();
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    visibilityObserver.observe(canvas);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerleave', onPointerLeave);

    if (reduceMotion) draw();
    else frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={`pointer-events-none ${className}`} aria-hidden />;
}

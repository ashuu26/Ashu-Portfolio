'use client';

import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from 'react';
import { AnimatePresence, animate, motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const spring = { stiffness: 220, damping: 20, mass: 0.6 };

// 3D tilt that follows the pointer, plus a spotlight driven by the --mx/--my CSS vars.
// Rotation lives on the outer wrapper so the inner card keeps its own hover transitions.
export function TiltCard({
  children,
  className = '',
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    px.set(x);
    py.set(y);
    ref.current.style.setProperty('--mx', `${x * 100}%`);
    ref.current.style.setProperty('--my', `${y * 100}%`);
  };

  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`group/tilt relative ${className}`}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(106, 211, 255, 0.16), rgba(139, 92, 246, 0.08) 35%, transparent 60%)',
        }}
        aria-hidden
      />
    </motion.div>
  );
}

// Nudges its child toward the pointer while hovered, springing back on leave.
export function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      className="inline-flex"
    >
      {children}
    </motion.div>
  );
}

export function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

// Slides each word up from behind a mask, staggered.
export function TextReveal({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {text.split(' ').map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] align-top" aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {' '}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function RoleRotator({ roles, interval = 2600 }: { roles: string[]; interval?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % roles.length), interval);
    return () => window.clearInterval(id);
  }, [roles.length, interval]);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[index]}
          className="inline-block whitespace-nowrap"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee group relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee-track flex w-max gap-3 group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-sm font-medium text-ink/80 shadow-sm transition hover:border-aurora/60 hover:text-ink dark:border-white/10 dark:bg-white/5 dark:text-cloud/80 dark:hover:text-cloud"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

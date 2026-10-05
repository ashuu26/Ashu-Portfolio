'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { MotionConfig, motion, useMotionValue, useScroll, useSpring } from 'framer-motion';

// Framer skips transform/layout animations for visitors who prefer reduced motion.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-pulse via-aurora to-ember"
      style={{ scaleX }}
      aria-hidden
    />
  );
}

// Soft light that trails the cursor. Only rendered for precise pointers (mouse/trackpad).
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 150, damping: 25, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 150, damping: 25, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return;
    setEnabled(true);
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-0 -ml-[260px] -mt-[260px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.14),rgba(34,211,238,0.08)_40%,transparent_70%)] blur-2xl"
      style={{ x: sx, y: sy }}
      aria-hidden
    />
  );
}

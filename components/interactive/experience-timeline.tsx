'use client';

import Image from 'next/image';
import { useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { experience } from '@/data/content';

export function ExperienceTimeline() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const role = experience[active];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const next = (active + keys[e.key] + experience.length) % experience.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)]">
      <div
        role="tablist"
        aria-label="Roles"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="relative -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 lg:pl-6"
      >
        <div
          className="absolute bottom-4 left-[11px] top-4 hidden w-px bg-gradient-to-b from-pulse/60 via-aurora/40 to-transparent lg:block"
          aria-hidden
        />
        {experience.map((item, idx) => {
          const selected = idx === active;
          return (
            <button
              key={`${item.company}-${item.role}`}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              role="tab"
              id={`exp-tab-${idx}`}
              aria-selected={selected}
              aria-controls="exp-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(idx)}
              className={`relative min-w-[220px] shrink-0 rounded-2xl px-4 py-3 text-left transition lg:min-w-0 ${
                selected ? 'text-ink dark:text-cloud' : 'text-ink/60 hover:text-ink dark:text-cloud/60 dark:hover:text-cloud'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="exp-active"
                  className="absolute inset-0 -z-0 rounded-2xl border border-slate-200/70 bg-white/80 shadow-card dark:border-white/10 dark:bg-white/10 dark:shadow-glow"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span
                className={`absolute -left-[19px] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 transition lg:block ${
                  selected ? 'scale-125 border-aurora bg-aurora shadow-glow' : 'border-mist/60 bg-cloud dark:bg-night'
                }`}
                aria-hidden
              />
              <span className="relative block text-xs uppercase tracking-[0.18em] opacity-70">{item.period}</span>
              <span className="relative mt-1 block font-semibold">{item.role}</span>
              <span className="relative block text-sm text-mist">{item.company}</span>
            </button>
          );
        })}
      </div>

      <div id="exp-panel" role="tabpanel" aria-labelledby={`exp-tab-${active}`} className="card-surface relative overflow-hidden p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-center gap-4">
              {role.logo && (
                <div className="h-14 w-20 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/95 p-2 shadow-sm dark:border-white/10">
                  <Image src={role.logo} alt={`${role.company} logo`} width={96} height={64} className="h-full w-full object-contain" />
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/60 dark:text-cloud/60">{role.period}</p>
                <h3 className="mt-1 text-2xl font-semibold text-ink dark:text-cloud">{role.role}</h3>
                <p className="text-mist">{role.company}</p>
              </div>
            </div>
            <p className="mt-5 text-ink/80 dark:text-cloud/80">{role.summary}</p>
            <ul className="mt-6 grid gap-3 text-sm text-ink/80 dark:text-cloud/80">
              {role.highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
                  className="grid grid-cols-[1.75rem_1fr] gap-3 rounded-2xl border border-slate-200/70 bg-white/55 p-3 shadow-border transition hover:border-aurora/50 dark:border-white/10 dark:bg-white/5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-aurora/90 to-pulse/90 text-night shadow-sm">
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

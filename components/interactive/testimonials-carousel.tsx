'use client';

import { useCallback, useEffect, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { recommendationsUrl, testimonials } from '@/data/content';

const AUTO_ADVANCE_MS = 8000;
const LONG_QUOTE = 420;

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

export function TestimonialsCarousel() {
  const [[index, direction], setPage] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const count = testimonials.length;
  const item = testimonials[index];

  const go = useCallback(
    (step: number) => {
      setExpanded(false);
      setPage(([i]) => [(i + step + count) % count, step]);
    },
    [count]
  );

  useEffect(() => {
    if (paused || expanded || count < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setTimeout(() => go(1), AUTO_ADVANCE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, expanded, count, go]);

  if (!item) return null;

  const isLong = item.quote.join(' ').length > LONG_QUOTE;

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) go(1);
    else if (info.offset.x > 60) go(-1);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="LinkedIn recommendations"
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="card-surface relative overflow-hidden p-6 outline-none hover:translate-y-0 focus-visible:ring-2 focus-visible:ring-aurora/60 sm:p-10"
      >
        <Quote className="pointer-events-none absolute right-6 top-6 hidden h-28 w-28 text-aurora/15 sm:block" aria-hidden />

        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.figure
            key={index}
            custom={direction}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d >= 0 ? 60 : -60 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d >= 0 ? -60 : 60 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            drag={count > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={onDragEnd}
            className="relative cursor-grab active:cursor-grabbing"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}`}
          >
            <blockquote
              className={`space-y-4 text-lg leading-relaxed text-ink/90 dark:text-cloud/90 sm:pr-24 sm:text-xl ${
                isLong && !expanded ? 'max-h-[10.5em] overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent)]' : ''
              }`}
            >
              {item.quote.map((paragraph, i) => (
                <p key={i}>
                  {i === 0 && '“'}
                  {paragraph}
                  {i === item.quote.length - 1 && '”'}
                </p>
              ))}
            </blockquote>
            {isLong && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="mt-2 text-sm font-semibold text-aurora underline-offset-4 hover:underline"
              >
                {expanded ? 'Show less' : 'Read more'}
              </button>
            )}

            <figcaption className="mt-8 flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pulse via-aurora to-ember font-display text-sm font-bold text-night shadow-glow">
                {initials(item.name)}
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-ink dark:text-cloud">{item.name}</p>
                {item.context && <p className="text-sm text-ink/70 dark:text-cloud/70">{item.context}</p>}
                <p className="text-xs text-mist">LinkedIn recommendation</p>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        {count > 1 && !paused && !expanded && (
          <motion.div
            key={`progress-${index}`}
            className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-pulse via-aurora to-ember"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
            aria-hidden
          />
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        {count > 1 ? (
          <div className="flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous recommendation"
              className="glass-border inline-flex h-10 w-10 items-center justify-center text-ink transition hover:scale-105 dark:text-cloud"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setExpanded(false);
                    setPage([i, i > index ? 1 : -1]);
                  }}
                  aria-label={`Show recommendation from ${t.name}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-aurora' : 'w-2 bg-mist/50 hover:bg-mist'}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next recommendation"
              className="glass-border inline-flex h-10 w-10 items-center justify-center text-ink transition hover:scale-105 dark:text-cloud"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        ) : (
          <span />
        )}
        <a
          href={recommendationsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/80 underline-offset-4 hover:underline dark:text-cloud/80"
        >
          View all on LinkedIn
          <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}

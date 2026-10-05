'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { skillGroups, skills } from '@/data/content';
import { TiltCard } from './motion-primitives';

const groupAccent: Record<(typeof skillGroups)[number], string> = {
  'Cloud Platforms': 'from-amber-400/80 to-ember/80',
  'Automation & Delivery': 'from-pulse/80 to-aurora/80',
  'Security & Networking': 'from-emerald-400/80 to-jade/80',
  'AI / GenAI': 'from-fuchsia-400/80 to-pulse/80',
  Operations: 'from-sky-400/80 to-aurora/80',
  'Architecture & Practice': 'from-aurora/80 to-pulse/80',
};

const uniqueSkillCount = new Set(skills.flatMap((s) => s.items)).size;

export function SkillsExplorer() {
  const [group, setGroup] = useState<'All' | (typeof skillGroups)[number]>('All');
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const visible = useMemo(
    () =>
      skills.filter(
        (s) =>
          (group === 'All' || s.group === group) &&
          (!q || s.title.toLowerCase().includes(q) || s.items.some((item) => item.toLowerCase().includes(q))),
      ),
    [group, q],
  );

  const matchCount = q ? new Set(visible.flatMap((s) => s.items.filter((i) => i.toLowerCase().includes(q)))).size : 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0" role="group" aria-label="Filter skills by area">
          {(['All', ...skillGroups] as const).map((g) => {
            const selected = g === group;
            return (
              <button
                key={g}
                aria-pressed={selected}
                onClick={() => setGroup(g)}
                className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  selected ? 'text-night' : 'text-ink/70 hover:text-ink dark:text-cloud/70 dark:hover:text-cloud'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="skill-filter"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-pulse via-aurora to-ember"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{g}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-mist" aria-live="polite">
            {q ? (
              <>
                {matchCount} matching {matchCount === 1 ? 'skill' : 'skills'} for “{query.trim()}”
              </>
            ) : (
              <>
                <span className="font-semibold text-ink dark:text-cloud">{uniqueSkillCount}+</span> tools and practices across {skills.length} areas
              </>
            )}
          </p>
          <label className="relative flex w-full items-center sm:w-72">
            <Search size={16} className="pointer-events-none absolute left-4 text-mist" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a tool, e.g. Bedrock"
              aria-label="Search skills"
              className="w-full rounded-full border border-slate-200/70 bg-white/70 py-2.5 pl-10 pr-10 text-sm text-ink outline-none transition placeholder:text-mist focus:border-aurora/70 focus:ring-2 focus:ring-aurora/30 dark:border-white/10 dark:bg-white/5 dark:text-cloud [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 rounded-full p-1 text-mist hover:text-ink dark:hover:text-cloud"
              >
                <X size={14} />
              </button>
            )}
          </label>
        </div>
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((skill) => (
            <motion.div
              key={skill.title}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard className="h-full" max={5}>
                <div className="card-surface h-full p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-mist">{skill.group}</p>
                      <h3 className="mt-1 text-lg font-semibold text-ink dark:text-cloud">{skill.title}</h3>
                    </div>
                    <span
                      className={`flex h-10 min-w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br px-2 font-display text-sm font-bold text-night transition-transform duration-500 group-hover/tilt:rotate-6 ${groupAccent[skill.group]}`}
                    >
                      {skill.items.length}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => {
                      const hit = q && item.toLowerCase().includes(q);
                      return (
                        <span
                          key={item}
                          className={`rounded-full px-3 py-1 text-xs shadow-border transition duration-300 hover:-translate-y-0.5 ${
                            hit
                              ? 'scale-105 bg-aurora/25 font-semibold text-ink ring-1 ring-aurora/70 dark:text-cloud'
                              : q
                                ? 'bg-white/5 text-ink/40 dark:text-cloud/40'
                                : 'bg-white/5 text-ink/80 hover:bg-aurora/15 dark:text-cloud/80'
                          }`}
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="rounded-3xl border border-dashed border-slate-300/70 p-8 text-center text-mist dark:border-white/10">
          Nothing matches “{query.trim()}”.{' '}
          <button
            onClick={() => {
              setQuery('');
              setGroup('All');
            }}
            className="font-semibold text-aurora underline-offset-4 hover:underline"
          >
            Reset filters
          </button>
        </p>
      )}
    </div>
  );
}

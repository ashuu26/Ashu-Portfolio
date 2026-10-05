'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowUpRight, Boxes, Download, GraduationCap, Rocket } from 'lucide-react';
import { terraformStudio } from '@/data/content';
import { Counter, Magnetic, TiltCard } from './motion-primitives';

type Provider = (typeof terraformStudio.providers)[number];

const stepIcons = [Rocket, Boxes, GraduationCap, Download];

// Node colors follow the studio's own diagram: edge = blue, compute = amber, data = green.
const nodeStyle = {
  internet: 'stroke-mist [stroke-dasharray:4_4]',
  edge: 'stroke-sky-400',
  compute: 'stroke-amber-400',
  data: 'stroke-emerald-400',
};

function ArchitectureDiagram({ provider }: { provider: Provider }) {
  const nodes = [
    { key: 'internet', label: 'Internet', x: 12, y: 92, kind: 'internet' as const },
    { key: 'edge', label: provider.nodes.edge, x: 140, y: 92, kind: 'edge' as const },
    { key: 'c1', label: provider.nodes.compute, x: 282, y: 38, kind: 'compute' as const },
    { key: 'c2', label: provider.nodes.compute, x: 282, y: 146, kind: 'compute' as const },
    { key: 'data', label: provider.nodes.data, x: 424, y: 92, kind: 'data' as const },
  ];
  const w = 104;
  const h = 36;
  const edges = [
    'M116 110 L140 110',
    'M244 110 C262 110 262 56 282 56',
    'M244 110 C262 110 262 164 282 164',
    'M386 56 C406 56 406 110 424 110',
    'M386 164 C406 164 406 110 424 110',
  ];

  return (
    <svg viewBox="0 0 540 220" className="h-auto w-full font-mono text-ink dark:text-cloud" role="img" aria-label={`${provider.short} reference architecture: Internet to ${provider.nodes.edge}, two ${provider.nodes.compute} instances, and ${provider.nodes.data}`}>
      <rect x="126" y="8" width="406" height="204" rx="10" className="fill-none stroke-amber-400/40 [stroke-dasharray:5_5]" />
      <text x="146" y="28" className="fill-current text-[11px] opacity-60">
        {provider.network}
      </text>
      {edges.map((d, i) => (
        <g key={`${provider.id}-e${i}`}>
          <motion.path
            d={d}
            className="fill-none stroke-amber-400/30"
            strokeWidth={1.5}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.35 + i * 0.08, duration: 0.5 }}
          />
          <motion.path
            d={d}
            className="studio-flow fill-none stroke-amber-400"
            strokeWidth={1.5}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
          />
        </g>
      ))}
      {nodes.map((n, i) => (
        <motion.g
          key={`${provider.id}-${n.key}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.07, duration: 0.35 }}
        >
          <rect
            x={n.x}
            y={n.y}
            width={w}
            height={h}
            rx="8"
            strokeWidth={2}
            className={`fill-white/80 dark:fill-night/80 ${nodeStyle[n.kind]}`}
          />
          <text x={n.x + w / 2} y={n.y + h / 2 + 4} textAnchor="middle" className="fill-current text-[13px] font-semibold">
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

// Types the init/plan session line by line, restarting whenever the provider changes.
function Terminal({ provider, start }: { provider: Provider; start: boolean }) {
  const lines = [
    { text: '$ terraform init', tone: 'cmd' },
    { text: 'Initializing provider plugins...', tone: 'muted' },
    { text: `- Installing ${provider.source} ${provider.version}`, tone: 'muted' },
    { text: '$ terraform plan', tone: 'cmd' },
    ...provider.plan.map((r) => ({ text: `  + ${r}`, tone: 'add' })),
    { text: `Plan: ${provider.plan.length} to add, 0 to change, 0 to destroy.  (preview)`, tone: 'summary' },
  ];
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(lines.length);
      return;
    }
    setShown(0);
    const id = window.setInterval(() => {
      setShown((n) => {
        if (n >= lines.length) {
          window.clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 260);
    return () => window.clearInterval(id);
  }, [provider.id, start, lines.length]);

  const tone: Record<string, string> = {
    cmd: 'text-cloud',
    muted: 'text-mist',
    add: 'text-emerald-400',
    summary: 'text-amber-300',
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] shadow-card">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-2 font-mono text-xs text-mist">~/{provider.id}-project</span>
      </div>
      <pre className="h-[262px] overflow-hidden px-4 py-3 font-mono text-[12px] leading-relaxed sm:text-[13px]" aria-label={`terraform plan output for ${provider.short}`}>
        {lines.slice(0, shown).map((line, i) => (
          <div key={`${provider.id}-${i}`} className={`${tone[line.tone]} truncate`}>
            {line.text}
          </div>
        ))}
        {shown < lines.length && <span className="inline-block h-4 w-2 animate-pulse bg-cloud/80 align-middle" aria-hidden />}
      </pre>
    </div>
  );
}

function VerbCycler({ verbs }: { verbs: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setI((n) => (n + 1) % verbs.length), 2000);
    return () => window.clearInterval(id);
  }, [verbs.length]);

  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={verbs[i]}
          className="inline-block bg-gradient-to-r from-pulse to-aurora bg-clip-text text-transparent"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {verbs[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function TerraformStudioShowcase() {
  const { providers, stats, steps } = terraformStudio;
  const [active, setActive] = useState(0);
  const demoRef = useRef<HTMLDivElement>(null);
  const inView = useInView(demoRef, { once: true, margin: '-80px' });
  const provider = providers[active];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/60 p-6 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-glow sm:p-10">
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-pulse/25 blur-3xl" aria-hidden />

      <div className="relative grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Story */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pulse to-aurora px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-night">
              {terraformStudio.role}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Live product
            </span>
          </div>

          <div>
            <h3 className="font-display text-3xl font-bold text-ink dark:text-cloud sm:text-4xl">{terraformStudio.name}</h3>
            <p className="mt-1 text-mist">{terraformStudio.tagline}</p>
          </div>

          <p className="font-display text-2xl font-semibold leading-snug text-ink dark:text-cloud sm:text-3xl">
            Pick a cloud, then <VerbCycler verbs={terraformStudio.verbs} /> it as code.
          </p>
          <p className="text-ink/80 dark:text-cloud/80">{terraformStudio.pitch}</p>

          <ol className="grid gap-3 sm:grid-cols-2">
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl border border-slate-200/70 bg-white/70 p-4 transition hover:-translate-y-0.5 hover:border-aurora/50 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-pulse/90 to-aurora/90 text-night transition-transform group-hover:rotate-6">
                      <Icon size={16} />
                    </span>
                    <span className="font-mono text-xs text-mist">0{i + 1}</span>
                  </div>
                  <p className="mt-3 font-semibold text-ink dark:text-cloud">{step.title}</p>
                  <p className="mt-1 text-sm text-ink/70 dark:text-cloud/70">{step.copy}</p>
                </motion.li>
              );
            })}
          </ol>

          <div className="flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href={terraformStudio.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pulse via-aurora to-ember px-5 py-3 text-sm font-semibold text-night shadow-glow"
              >
                Launch Terraform Studio
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <p className="text-sm text-mist">Co-built with {terraformStudio.coBuilder}</p>
          </div>
        </div>

        {/* Interactive demo */}
        <div ref={demoRef} className="flex flex-col gap-4">
          <div role="group" aria-label="Cloud provider" className="flex w-fit gap-1 rounded-full border border-slate-200/70 bg-white/70 p-1 dark:border-white/10 dark:bg-white/5">
            {providers.map((p, i) => (
              <button
                key={p.id}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  i === active ? 'text-night' : 'text-ink/70 hover:text-ink dark:text-cloud/70 dark:hover:text-cloud'
                }`}
              >
                {i === active && (
                  <motion.span
                    layoutId="studio-provider"
                    className={`absolute inset-0 rounded-full ${p.id === 'aws' ? 'bg-amber-400' : 'bg-sky-400'}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative hidden sm:inline">{p.name}</span>
                <span className="relative sm:hidden">{p.id === 'aws' ? 'AWS' : 'Azure'}</span>
              </button>
            ))}
          </div>

          <TiltCard max={4}>
            <div className="rounded-3xl border border-slate-200/70 bg-white/70 p-5 dark:border-white/10 dark:bg-night/60">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl font-mono text-sm font-bold ${
                      provider.id === 'aws' ? 'bg-amber-400/15 text-amber-500' : 'bg-sky-400/15 text-sky-500'
                    }`}
                  >
                    {provider.short}
                  </span>
                  <div>
                    <p className="font-semibold text-ink dark:text-cloud">{provider.name}</p>
                    <p className="font-mono text-xs text-mist">{provider.source}</p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    provider.status === 'Available'
                      ? 'bg-emerald-400/15 text-emerald-600 dark:text-emerald-300'
                      : 'bg-amber-400/15 text-amber-600 dark:text-amber-300'
                  }`}
                >
                  {provider.status}
                </span>
              </div>
              <div className="mt-4 rounded-2xl border border-dashed border-slate-300/70 bg-[radial-gradient(circle,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:16px_16px] p-2 dark:border-white/10">
                <ArchitectureDiagram key={provider.id} provider={provider} />
              </div>
            </div>
          </TiltCard>

          <Terminal provider={provider} start={inView} />

          <AnimatePresence mode="wait">
            <motion.div
              key={provider.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-sm text-ink/80 dark:text-cloud/80">{provider.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {provider.services.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04 }}
                    className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs text-ink/80 dark:border-white/10 dark:bg-white/5 dark:text-cloud/80"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Stats */}
      <div className="relative mt-10 grid grid-cols-2 gap-4 border-t border-slate-200/70 pt-8 dark:border-white/10 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
              <Counter value={stat.value} />
            </p>
            <p className="mt-1 text-sm text-ink/70 dark:text-cloud/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

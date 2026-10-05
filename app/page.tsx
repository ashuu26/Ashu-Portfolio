'use client';

import Image from 'next/image';
import { ArrowUpRight, MapPin, MousePointer2, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { contact, credentials, hero, projects, stats, testimonials, toolbelt } from '@/data/content';
import { ExperienceTimeline } from '@/components/interactive/experience-timeline';
import { SkillsExplorer } from '@/components/interactive/skills-explorer';
import { TestimonialsCarousel } from '@/components/interactive/testimonials-carousel';
import { TerraformStudioShowcase } from '@/components/interactive/terraform-studio-showcase';
import { Counter, Magnetic, Marquee, RoleRotator, TextReveal, TiltCard } from '@/components/interactive/motion-primitives';

const container = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <motion.div
      className="mb-8 flex flex-col gap-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={container}
    >
      <p className="pill w-fit bg-white/5 text-xs uppercase tracking-[0.2em] text-ink/70 dark:text-cloud/70">{eyebrow}</p>
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-semibold text-gradient sm:text-4xl">{title}</h2>
        <motion.div
          className="h-px flex-1 origin-left bg-gradient-to-r from-pulse/70 via-aurora/60 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <p className="max-w-3xl text-lg text-ink/80 dark:text-cloud/80">{copy}</p>
    </motion.div>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-ink/80 shadow-border transition hover:-translate-y-0.5 hover:bg-aurora/15 dark:text-cloud/80">
      {label}
    </span>
  );
}

export default function Page() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="relative pt-28 md:pt-32" id="about">
        <div className="section-shell relative">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              className="hero-visual space-y-6 rounded-3xl border border-slate-200/70 p-6 sm:p-8 shadow-card dark:border-white/10 dark:shadow-glow"
              initial="hidden"
              animate="show"
              variants={container}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ink/70 dark:text-cloud/70">
                <Sparkles size={14} />
                <RoleRotator roles={hero.roles} />
              </div>
              <h1 className="text-4xl font-bold leading-tight text-ink dark:text-cloud sm:text-5xl lg:text-6xl">
                <TextReveal text={hero.title} delay={0.15} />
              </h1>
              <motion.p
                className="text-lg text-ink/80 dark:text-cloud/80 sm:text-xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {hero.subtitle}
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-3"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.85 } } }}
              >
                {hero.badges.map((badge) => (
                  <motion.span key={badge} variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}>
                    <Tag label={badge} />
                  </motion.span>
                ))}
              </motion.div>
              <div className="flex flex-wrap gap-3 text-sm text-ink/80 dark:text-cloud/80">
                <div className="pill">
                  <ShieldCheck size={16} />
                  Secure by design
                </div>
                <div className="pill">
                  <ArrowUpRight size={16} />
                  Business-first outcomes
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Magnetic>
                  <Link
                    href="#projects"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pulse via-aurora to-ember px-5 py-3 text-sm font-semibold text-night shadow-glow"
                  >
                    View featured projects
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://www.linkedin.com/in/ashusaini-in"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-ink/80 hover:border-white/30 dark:text-cloud/80"
                  >
                    LinkedIn profile
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="/Ashu-Saini-Resume.pdf"
                    download="Ashu-Saini-Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-ink shadow-border dark:bg-white/10 dark:text-cloud"
                  >
                    Download resume
                    <ArrowUpRight size={16} />
                  </a>
                </Magnetic>
              </div>
              <p className="hidden items-center gap-2 text-xs text-mist md:flex">
                <MousePointer2 size={14} />
                Move your cursor — the network responds.
              </p>
            </motion.div>

            <div className="flex h-full flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.12, duration: 0.6 }}
                className="flex-1"
              >
                <TiltCard className="h-full" max={6}>
                  <div className="card-surface relative h-full overflow-hidden p-0">
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-pulse/20 via-aurora/15 to-ember/15" aria-hidden />
                    <div className="absolute right-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow-sm dark:bg-white/80">
                      {credentials.length}x Certified
                    </div>
                    <Image
                      src="/profile-headshot-2026.jpg"
                      alt="Ashu Saini professional portrait"
                      width={1200}
                      height={1400}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/tilt:scale-105"
                      priority
                    />
                  </div>
                </TiltCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                className="card-surface flex flex-nowrap items-center justify-center gap-3 overflow-x-auto px-4 py-4 sm:justify-between sm:gap-4"
              >
                {credentials.map((cert, idx) =>
                  cert.badge ? (
                    <motion.div
                      key={cert.title}
                      title={`${cert.title} — ${cert.issuer}`}
                      initial={{ opacity: 0, rotateY: -90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      transition={{ delay: 0.5 + idx * 0.08, duration: 0.5 }}
                      className="group h-14 w-14 shrink-0 [perspective:800px] sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                    >
                      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-1.5 shadow-sm [backface-visibility:hidden] dark:border-white/10">
                          <Image
                            src={cert.badge}
                            alt={`${cert.title} badge`}
                            width={160}
                            height={160}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 rounded-2xl border border-slate-200/70 bg-white p-1 text-center shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] dark:border-white/10 dark:bg-night">
                          <span className="text-[9px] font-semibold leading-tight text-ink dark:text-cloud sm:text-[10px]">
                            {cert.issuer}
                          </span>
                          <span className="text-[9px] text-mist sm:text-[10px]">{cert.year}</span>
                        </div>
                      </div>
                    </motion.div>
                  ) : null
                )}
              </motion.div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={container}
                custom={idx * 0.08}
              >
                <TiltCard max={10}>
                  <div className="card-surface p-5 text-center">
                    <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-sm text-ink/70 dark:text-cloud/70">{stat.label}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terraform Studio */}
      <section className="section-shell" id="studio">
        <SectionHeader
          eyebrow="Founder"
          title="Terraform Studio — my own product"
          copy="A visual builder that turns cloud architecture choices into a ready-to-run Terraform project. Switch providers below to see what it generates."
        />
        <TerraformStudioShowcase />
      </section>

      {/* Experience */}
      <section className="section-shell" id="experience">
        <SectionHeader
          eyebrow="Experience"
          title="Guiding platforms from design to day-2 success"
          copy="11-year track record across architecture, enablement, and resilient operations. Pick a role to explore."
        />
        <ExperienceTimeline />
      </section>

      {/* Projects */}
      <section className="section-shell" id="projects">
        <SectionHeader
          eyebrow="Projects"
          title="Featured builds & accelerators"
          copy="Curated work spanning landing zones, platform reliability, and data observability."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={container}
              custom={idx * 0.1}
            >
              <TiltCard className="h-full">
                <div className="card-surface flex h-full flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-sm text-mist">0{idx + 1}</p>
                      <h3 className="text-xl font-semibold text-ink dark:text-cloud">{project.name}</h3>
                    </div>
                    <div className="h-10 w-10 shrink-0 rounded-2xl bg-gradient-to-br from-pulse/80 via-aurora/80 to-ember/70 transition-transform duration-500 group-hover/tilt:rotate-90 group-hover/tilt:scale-110" />
                  </div>
                  <p className="mt-4 text-ink/80 dark:text-cloud/80">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <Tag key={item} label={item} />
                    ))}
                  </div>
                  <p className="mt-auto border-t border-slate-200/70 pt-4 text-sm text-ink/70 dark:border-white/10 dark:text-cloud/70">
                    <span className="font-semibold text-ember">Impact · </span>
                    {project.impact}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Toolbelt */}
      <section className="section-shell" aria-label="Toolbelt">
        <p className="mb-3 text-center text-xs uppercase tracking-[0.25em] text-mist">Daily toolbelt</p>
        <Marquee items={toolbelt} />
      </section>

      {/* Credentials */}
      <section className="section-shell" id="credentials">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications that back the craft"
          copy="Credentials across hyperscalers and SRE ensure recommendations align with best practices and compliance."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {credentials.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: idx * 0.06, duration: 0.45 }}
              className="card-surface group flex items-center gap-4 px-5 py-4"
            >
              {cert.badge ? (
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/95 p-2 shadow-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:border-white/10">
                  <Image
                    src={cert.badge}
                    alt={`${cert.title} badge`}
                    width={160}
                    height={160}
                    className="h-full w-full object-contain"
                  />
                </div>
              ) : null}
              <div className="min-w-0 flex-1">
                <p className="text-sm text-mist">{cert.issuer}</p>
                <p className="text-lg font-semibold leading-snug text-ink dark:text-cloud">{cert.title}</p>
              </div>
              <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-sm text-ink/80 dark:text-cloud/80">{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section-shell" id="skills">
        <SectionHeader
          eyebrow="Skills"
          title="Where I move fastest"
          copy="The full toolchain from my resume: filter by area or search for a specific tool."
        />
        <SkillsExplorer />
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="section-shell" id="testimonials">
          <SectionHeader
            eyebrow="Testimonials"
            title="What colleagues and clients say"
            copy="Recommendations from people I have worked with, shared on LinkedIn."
          />
          <TestimonialsCarousel />
        </section>
      )}

      {/* Contact */}
      <section className="section-shell" id="contact">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build your next resilient release"
          copy="Book a discovery call to review goals, map options, and align on a pragmatic plan."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.div
            className="card-surface p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 text-ink/80 dark:text-cloud/80">
              <MapPin size={18} />
              {contact.location}
            </div>
            <div className="mt-3 flex items-center gap-3 text-ink/80 dark:text-cloud/80">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Response within 24h
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Magnetic>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pulse via-aurora to-ember px-5 py-3 text-sm font-semibold text-night shadow-glow"
                >
                  Email Ashu
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/ashusaini-in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-ink/80 hover:border-white/30 dark:text-cloud/80"
                >
                  LinkedIn profile
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            className="card-surface p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h3 className="text-xl font-semibold text-ink dark:text-cloud">Engagement snapshot</h3>
            <ol className="mt-4 space-y-3 text-ink/80 dark:text-cloud/80">
              {[
                { color: 'bg-ember', text: 'Discovery workshop to align success metrics and constraints.' },
                { color: 'bg-aurora', text: 'Architecture blueprint + backlog to reach day-2 readiness.' },
                { color: 'bg-pulse', text: 'Guided delivery with playbooks, runbooks, and enablement.' },
              ].map((step, idx) => (
                <motion.li
                  key={step.text}
                  className="flex gap-3"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.15 }}
                >
                  <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${step.color}`} />
                  {step.text}
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

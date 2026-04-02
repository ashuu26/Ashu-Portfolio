'use client';

import Image from 'next/image';
import { ArrowUpRight, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { contact, credentials, experience, hero, projects, skills } from '@/data/content';

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
    <div className="mb-8 flex flex-col gap-3">
      <p className="pill w-fit bg-white/5 text-xs uppercase tracking-[0.2em] text-ink/70 dark:text-cloud/70">{eyebrow}</p>
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-semibold text-gradient sm:text-4xl">{title}</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-pulse/70 via-aurora/60 to-transparent" />
      </div>
      <p className="max-w-3xl text-lg text-ink/80 dark:text-cloud/80">{copy}</p>
    </div>
  );
}

function Tag({ label }: { label: string }) {
  return <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-ink/80 dark:text-cloud/80 shadow-border">{label}</span>;
}

export default function Page() {
  return (
    <div className="space-y-20 pb-24">
      {/* Hero */}
      <section className="section-shell pt-16 md:pt-20" id="about">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="space-y-6 hero-visual rounded-3xl border border-white/10 p-8 shadow-glow"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-ink/70 dark:text-cloud/70">
              <Sparkles size={14} />
              Cloud Consultant
            </div>
            <h1 className="text-4xl font-bold leading-tight text-ink dark:text-cloud sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="text-lg text-ink/80 dark:text-cloud/80 sm:text-xl">{hero.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              {hero.badges.map((badge) => (
                <Tag key={badge} label={badge} />
              ))}
            </div>
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
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pulse via-aurora to-ember px-5 py-3 text-sm font-semibold text-night shadow-glow"
              >
                View featured projects
                <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://www.linkedin.com/in/ashu-saini-bb96ba1a7"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-ink/80 dark:text-cloud/80 hover:border-white/30"
              >
                LinkedIn profile
              </a>
              <a
                href="/AshuSainiResume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-ink shadow-border hover:-translate-y-0.5 transition dark:bg-white/10 dark:text-cloud"
                download
              >
                Download résumé
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.12 } }}
            className="card-surface relative overflow-hidden p-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pulse/20 via-aurora/15 to-ember/15" aria-hidden />
            <div className="relative h-full">
              <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow-sm dark:bg-white/80">
                AWS Certified
              </div>
              <Image
                src="/profile-headshot.jpg"
                alt="Ashu Saini professional portrait"
                width={1200}
                height={1400}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-shell" id="experience">
        <SectionHeader
          eyebrow="Experience"
          title="Guiding platforms from design to day-2 success"
          copy="11-year track record across architecture, enablement, and resilient operations."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {experience.map((role, idx) => (
            <motion.div
              key={role.company}
              className="card-surface p-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={container}
              custom={idx * 0.1}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {role.logo ? (
                    <div className="h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-2 dark:bg-white/10">
                      <Image
                        src={role.logo}
                        alt={`${role.company} logo`}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-aurora to-pulse opacity-80" />
                  )}
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-ink/60 dark:text-cloud/60">{role.period}</p>
                    <h3 className="mt-1 text-xl font-semibold text-ink dark:text-cloud">{role.role}</h3>
                    <p className="text-mist">{role.company}</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-ink/80 dark:text-cloud/80">{role.summary}</p>
              <ul className="mt-4 space-y-3 text-sm text-ink/80 dark:text-cloud/80">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-aurora" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
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
              className="card-surface flex h-full flex-col p-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={container}
              custom={idx * 0.1}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-ink dark:text-cloud">{project.name}</h3>
                  <p className="text-sm text-ink/70 dark:text-cloud/70">{project.impact}</p>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-pulse/80 via-aurora/80 to-ember/70" />
              </div>
              <p className="mt-4 text-ink/80 dark:text-cloud/80">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Tag key={item} label={item} />
                ))}
              </div>
              <div className="mt-auto flex items-center gap-3 pt-6">
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Credentials & Skills */}
      <section className="section-shell" id="credentials">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Credentials"
              title="Certifications that back the craft"
              copy="Credentials across hyperscalers and SRE ensure recommendations align with best practices and compliance."
            />
            <div className="space-y-4">
              {credentials.map((cert) => (
                <div key={cert.title} className="card-surface flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="text-sm text-mist">{cert.issuer}</p>
                    <p className="text-lg font-semibold text-ink dark:text-cloud">{cert.title}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-ink/80 dark:text-cloud/80">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="skills">
            <SectionHeader
              eyebrow="Skills"
              title="Where I move fastest"
              copy="Battle-tested toolchain spanning architecture, platform enablement, and reliability."
            />
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.title} className="card-surface p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-ink dark:text-cloud">{skill.title}</h3>
                    <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-aurora/70 to-pulse/70" />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Tag key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              <Sparkles size={18} />
              Response within 24h
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pulse via-aurora to-ember px-5 py-3 text-sm font-semibold text-night shadow-glow"
              >
                Email Ashu
              </a>
              <a
                href="https://www.linkedin.com/in/ashu-saini-bb96ba1a7"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-ink/80 dark:text-cloud/80 hover:border-white/30"
              >
                LinkedIn profile
              </a>
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
            <ul className="mt-4 space-y-3 text-ink/80 dark:text-cloud/80">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-ember" />
                Discovery workshop to align success metrics and constraints.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-aurora" />
                Architecture blueprint + backlog to reach day-2 readiness.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-pulse" />
                Guided delivery with playbooks, runbooks, and enablement.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

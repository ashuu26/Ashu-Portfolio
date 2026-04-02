'use client';

import { Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { motion } from 'framer-motion';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="pointer-events-none fixed left-1/2 top-4 z-50 flex w-full max-w-7xl -translate-x-1/2 justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-auto flex w-full items-center justify-between gap-4 rounded-full border border-white/10 bg-white/80 px-5 py-3 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-night/70"
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-pulse via-aurora to-ember shadow-glow" />
          <div>
            <p className="text-sm text-mist">Ashu Saini</p>
            <p className="font-semibold text-ink dark:text-cloud">Cloud Infrastructure & Migration Specialist</p>
          </div>
        </div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
          className="hidden items-center gap-4 text-sm text-ink/80 dark:text-cloud/80 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/60 hover:text-ink dark:hover:bg-white/10 dark:hover:text-cloud"
            >
              {item.label}
            </a>
          ))}
        </motion.nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/ashu-saini-bb96ba1a7"
            target="_blank"
            className="glass-border inline-flex h-10 w-10 items-center justify-center text-ink/80 dark:text-cloud/90 transition hover:scale-105"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:ashuu25.saini@gmail.com"
            className="glass-border inline-flex h-10 w-10 items-center justify-center text-ink/80 dark:text-cloud/90 transition hover:scale-105"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <ThemeToggle />
        </div>
      </motion.div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-night/70">
      <div className="section-shell flex items-center justify-between py-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-pulse via-aurora to-ember shadow-glow" />
          <div>
            <p className="text-sm text-mist">Ashu Saini</p>
            <p className="font-semibold text-ink dark:text-cloud">Cloud Consultant</p>
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
          className="hidden items-center gap-6 text-sm text-ink/80 dark:text-cloud/80 md:flex"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink dark:text-cloud">
              {item.label}
            </Link>
          ))}
        </motion.nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            className="glass-border inline-flex h-11 w-11 items-center justify-center text-ink/80 dark:text-cloud/90 transition hover:scale-105"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourhandle"
            target="_blank"
            className="glass-border inline-flex h-11 w-11 items-center justify-center text-ink/80 dark:text-cloud/90 transition hover:scale-105"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:ashu@example.com"
            className="glass-border inline-flex h-11 w-11 items-center justify-center text-ink/80 dark:text-cloud/90 transition hover:scale-105"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

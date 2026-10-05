'use client';

import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { testimonials } from '@/data/content';

const navItems: { href: string; label: string; highlight?: boolean }[] = [
  { href: '#about', label: 'About' },
  { href: '#studio', label: 'Studio', highlight: true },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#skills', label: 'Skills' },
  ...(testimonials.length ? [{ href: '#testimonials', label: 'Testimonials' }] : []),
  { href: '#contact', label: 'Contact' },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navItems.map((item) => item.href.slice(1));

export function Header() {
  const active = useActiveSection(sectionIds);

  return (
    <header className="pointer-events-none fixed left-1/2 top-4 z-50 flex w-full max-w-7xl -translate-x-1/2 justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="pointer-events-auto relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-full border border-amber-100/90 bg-gradient-to-r from-amber-50/95 via-orange-50/90 to-stone-50/95 px-5 py-3 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-night/70 dark:bg-none dark:shadow-lg"
      >
        <div
          className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/90 to-transparent dark:via-white/15"
          aria-hidden
        />
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-full border border-white/30 bg-night shadow-glow">
            <Image
              src="/favicon.png"
              alt="Ashu Saini logo"
              width={88}
              height={88}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="lg:hidden xl:block">
            <p className="text-sm text-mist">Ashu Saini</p>
            <p className="font-semibold text-ink dark:text-cloud">Solutions Architect</p>
          </div>
        </div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
          className="hidden items-center gap-0.5 whitespace-nowrap text-sm text-ink/80 dark:text-cloud/80 lg:flex xl:gap-3"
        >
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                className={`relative rounded-full px-2.5 py-2 transition hover:text-ink dark:hover:text-cloud ${
                  isActive ? 'text-ink dark:text-cloud' : ''
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/70 shadow-sm dark:bg-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.highlight && <span className="rainbow-ring absolute inset-0 rounded-full" aria-hidden />}
                <span className={`relative ${item.highlight ? 'rainbow-text font-semibold' : ''}`}>{item.label}</span>
              </a>
            );
          })}
        </motion.nav>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/ashusaini-in"
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

import { Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night/80">
      <div className="section-shell flex flex-col gap-4 py-8 text-sm text-mist md:flex-row md:items-center md:justify-between">
        <p className="text-ink/70 dark:text-cloud/70">Built with Next.js & Tailwind. Crafted for cloud impact.</p>
        <div className="flex items-center gap-3">
          <a href="mailto:ashuu25.saini@gmail.com" className="text-ink/70 dark:text-cloud/70 transition hover:text-ink dark:text-cloud">
            <Mail size={18} />
          </a>
          <a href="tel:+601115407364" className="text-ink/70 dark:text-cloud/70 transition hover:text-ink dark:text-cloud">
            <Phone size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ashu-saini-bb96ba1a7" className="text-ink/70 dark:text-cloud/70 transition hover:text-ink dark:text-cloud" target="_blank">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

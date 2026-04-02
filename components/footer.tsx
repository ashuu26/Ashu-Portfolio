import { Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night/80">
      <div className="section-shell flex flex-col gap-4 py-8 text-sm text-mist md:flex-row md:items-center md:justify-between">
        <div className="space-y-1 text-ink/70 dark:text-cloud/70">
          <p>© 2026 Ashu Saini</p>
          <p>Empowering businesses through cloud transformation ☁️</p>
          <div className="flex flex-wrap items-center gap-2">
            <span>Let’s connect:</span>
            <a
              href="https://www.linkedin.com/in/ashu-saini-bb96ba1a7"
              className="font-medium text-ink underline-offset-4 transition hover:text-ink/90 hover:underline dark:text-cloud"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <span className="opacity-50">|</span>
            <a
              href="https://github.com/ashuu26"
              className="font-medium text-ink underline-offset-4 transition hover:text-ink/90 hover:underline dark:text-cloud"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span className="opacity-50">|</span>
            <a
              href="mailto:ashuu25.saini@gmail.com"
              className="font-medium text-ink underline-offset-4 transition hover:text-ink/90 hover:underline dark:text-cloud"
            >
              Email
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:ashuu25.saini@gmail.com" className="text-ink/70 transition hover:text-ink dark:text-cloud/70 dark:hover:text-cloud">
            <Mail size={18} />
          </a>
          <a href="tel:+601115407364" className="text-ink/70 transition hover:text-ink dark:text-cloud/70 dark:hover:text-cloud">
            <Phone size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashu-saini-bb96ba1a7"
            className="text-ink/70 transition hover:text-ink dark:text-cloud/70 dark:hover:text-cloud"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

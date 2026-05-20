import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Manrope, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' });

export const metadata: Metadata = {
  title: 'Ashu Saini | Cloud Infrastructure & Migration Specialist',
  description:
    'Ashu Saini—11 years leading Cloud (AWS/ Azure) migrations, Terraform automation, and resilient platform operations across APAC enterprises.',
  metadataBase: new URL('https://www.linkedin.com/in/ashu-saini-bb96ba1a7'),
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  },
  openGraph: {
    title: 'Ashu Saini | Cloud Infrastructure & Migration Specialist',
    description:
      '11 years building and operating Cloud (AWS/ Azure) platforms, disaster recovery, and IaC automation for enterprise workloads.',
    url: 'https://www.linkedin.com/in/ashu-saini-bb96ba1a7',
    siteName: 'Ashu Saini Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cloud Consultant Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Consultant Portfolio',
    description: 'Projects, experience, and credentials of a cloud consultant.',
    images: ['/og-image.png']
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${space.variable} antialiased transition-colors duration-300 bg-cloud text-ink dark:bg-night dark:text-cloud`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen">
            <div className="pointer-events-none fixed inset-0 bg-mesh opacity-70 mix-blend-screen dark:mix-blend-normal" aria-hidden />
            <div className="relative z-10 flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

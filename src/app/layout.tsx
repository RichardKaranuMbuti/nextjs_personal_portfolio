import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Poppins } from 'next/font/google';
import '../styles/theme.css';
import './globals.css';

// Font setup
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Richard Karanu | Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Строительная компания Ультра Эс - строительство загородных домов в Екатеринбурге и области',
  description: 'Строительная компания Ультра Эс - строительство домов под ключ в Екатеринбурге и пригороде. Большой выбор проектов. Гарантия 12 лет. Каталог проектов.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>{children}</body>
    </html>
  );
}

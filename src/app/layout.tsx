import './globals.css';
import { ReactNode } from 'react';
import { Navbar } from '@/components/navbar/NavBar';
import { Footer } from '@/components/footer/Footer';
import { CallToActionSection } from '@/components/common/CallToActionSection';
import { CTA_CONFIG, FOOTER_CONFIG } from '@/const/layout';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <CallToActionSection {...CTA_CONFIG} />
        <Footer {...FOOTER_CONFIG} />
      </body>
    </html>
  );
}

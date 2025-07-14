import './globals.css';
import { ReactNode } from 'react';
import { Navbar } from '@/components/navbar/NavBar';
import { Footer } from '@/components/footer/Footer';
import { CallToActionSection } from '@/components/common/CallToActionSection';

export const metadata = {
  title: 'PrimalTraining',
  description: 'Train with us to reach your peak.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <CallToActionSection
          heading="WHAT WE BELIEVE IN"
          subheading="JOIN THE PRIMAL TRIBE TODAY!"
          buttonText="Reserve Your Spot"
          buttonLink="/reserve"
          bgColor="bg-violet-400"
          btnBgColor="bg-white"
          btnTextColor="text-black"
        />
        <Footer
          brandName="PrimalTraining"
          contactEmail="hello@figma.com"
          contactPhone="(203) 555-5555"
          bgColor="bg-violet-100"
        />
      </body>
    </html>
  );
}

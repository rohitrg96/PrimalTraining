'use client';

import Link from 'next/link';
import { CallToActionSectionProps } from '@/types/types';

export const CallToActionSection = ({
  heading,
  subheading,
  buttonText,
  bgColor = 'bg-violet-400',
  btnBgColor = 'bg-white',
  btnTextColor = 'text-black',
  buttonLink = '/',
}: CallToActionSectionProps) => {
  return (
    <div
      className={`w-full h-110 ${bgColor} flex flex-col items-center justify-center text-center py-12 space-y-5`}
    >
      <h2 className="md:text-lg">{heading}</h2>

      <p className="text-4xl md:text-5xl font-bold">{subheading}</p>

      <Link href={buttonLink}>
        <button
          className={`mt-4 px-6 py-3 uppercase ${btnBgColor} ${btnTextColor} font-semibold hover:bg-black hover:text-white transition border-black rounded-xl`}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

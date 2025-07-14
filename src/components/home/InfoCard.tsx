import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  titleSize?: string;
  className?: string;
}

export const InfoCard = ({
  title,
  description,
  titleSize = 'text-2xl  md:text-4xl',
  className = '',
}: InfoCardProps) => {
  return (
    <div
      className={`p-4 bg-violet-100 flex flex-col h-full  lg:min-h-[300px] xl:min-h-[500px] ${className}`}
    >
      <h3 className={`${titleSize} font-bold`}>{title}</h3>
      <div className="mt-auto w-full sm:w-11/12">
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

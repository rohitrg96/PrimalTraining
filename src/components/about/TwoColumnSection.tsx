import { AppImage } from '../common/AppImage';

interface TwoColumnSectionProps {
  title: string;
  subtitle?: string;
  content: string;
  imageUrl: string;
  reverse?: boolean; // true = image on left
  bgColor?: string;
  imageWidthClasses?: string; // e.g. "md:w-1/3 lg:w-2/3"
  contentWidthClasses?: string; // e.g. "md:w-2/3 lg:w-1/3"
}

export const TwoColumnSection = ({
  title,
  subtitle,
  content,
  imageUrl,
  reverse = false,
  bgColor = 'bg-white',
  imageWidthClasses = 'md:w-1/2 lg:w-1/3',
  contentWidthClasses = 'md:w-1/2 lg:w-2/3',
}: TwoColumnSectionProps) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } w-full ${bgColor} border`}
    >
      {/* Image */}
      <div className={`${imageWidthClasses} w-full`}>
        <AppImage src={imageUrl} alt="Section Image" className="w-full sm:h-full h-60" />
      </div>

      {/* Content */}
      <div
        className={`${contentWidthClasses} w-full p-6 flex flex-col sm:min-h-[450px] mt-6 md:mt-0`}
      >
        <h2 className="text-2xl sm:text-4xl font-bold w-full sm:w-10/12">{title}</h2>

        <div className="sm:mt-auto space-y-2  mt-6">
          {subtitle && <h3 className="font-bold text-xl mt-6 ">{subtitle}</h3>}
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
};

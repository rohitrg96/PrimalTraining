export type AppImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
};
export type CallToActionSectionProps = {
  heading: string;
  subheading: string;
  buttonText: string;
  bgColor?: string;
  btnBgColor?: string;
  btnTextColor?: string;
  buttonLink?: string; // e.g. "/reserve"
};

export type TwoColumnSectionProps = {
  title: string;
  subtitle?: string;
  content: string;
  imageUrl: string;
  reverse?: boolean; // true = image on left
  bgColor?: string;
  imageWidthClasses?: string; // e.g. "md:w-1/3 lg:w-2/3"
  contentWidthClasses?: string; // e.g. "md:w-2/3 lg:w-1/3"
};

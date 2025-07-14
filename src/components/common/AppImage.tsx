import Image from 'next/image';

type AppImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
};

export const AppImage = ({
  src,
  alt,
  className = '',
  width = 800,
  height = 600,
  fill = false,
  priority = false,
}: AppImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
};

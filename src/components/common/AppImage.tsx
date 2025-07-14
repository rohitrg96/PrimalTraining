import Image from 'next/image';
import { AppImageProps } from '@/types/types';

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

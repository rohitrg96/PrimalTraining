import { AppImage } from '../common/AppImage';
import { InfoCard } from './InfoCard';
import { COMMITTED_SECTION_CONTENT } from '@/const/home';

export const CommittedSection = () => (
  <div className="flex flex-col md:flex-row md:items-start w-full bg-violet-100 border">
    <div className="md:w-2/3 w-full">
      <AppImage
        src={COMMITTED_SECTION_CONTENT.image.src}
        alt={COMMITTED_SECTION_CONTENT.image.alt}
        className="w-full"
      />
    </div>
    <div className="md:w-1/3 w-full">
      <InfoCard
        title={COMMITTED_SECTION_CONTENT.info.title}
        description={COMMITTED_SECTION_CONTENT.info.description}
      />
    </div>
  </div>
);

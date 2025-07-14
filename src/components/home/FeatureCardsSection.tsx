import { AppImage } from '../common/AppImage';
import { InfoCard } from './InfoCard';
import { FEATURE_CARDS_DATA } from '@/const/home';

export const FeatureCardsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 border">
    <div className={FEATURE_CARDS_DATA.image.className}>
      <AppImage
        src={FEATURE_CARDS_DATA.image.src}
        alt={FEATURE_CARDS_DATA.image.alt}
        className="w-full"
      />
    </div>

    {FEATURE_CARDS_DATA.cards.map((card, index) => (
      <InfoCard
        key={index}
        title={card.title}
        description={card.description}
        className={card.className}
      />
    ))}
  </div>
);

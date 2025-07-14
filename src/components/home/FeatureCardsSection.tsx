import { AppImage } from '../common/AppImage';
import { InfoCard } from './InfoCard';

export const FeatureCardsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 border">
    <div className="order-1 md:order-3">
      <AppImage
        src="https://appeal-rice-stuff.figma.site/_assets/v9/4b3ae65ece4bb9cc6a2f518907d80df4631625fe.png"
        alt="Gym Illustration"
        className="w-full"
      />
    </div>
    <InfoCard
      title="GUIDED BY EXPERTS"
      description="We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential."
      className="border-r order-2 md:order-1"
    />
    <InfoCard
      title="DYNAMIC OPEN GYM"
      description="Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement."
      className="order-3 md:order-2"
    />
  </div>
);

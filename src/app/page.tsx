import { HeroSection } from '@/components/home/HeroSection';
import { CommittedSection } from '@/components/home/CommittedSection';
import { FeatureCardsSection } from '@/components/home/FeatureCardsSection';
import { JoinCommunitySection } from '@/components/home/JoinCommunitySection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CommittedSection />
      <FeatureCardsSection />
      <JoinCommunitySection />
    </div>
  );
}

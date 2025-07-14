import { AppImage } from '../common/AppImage';
import { InfoCard } from './InfoCard';

export const CommittedSection = () => (
  <div className="flex flex-col md:flex-row md:items-start w-full bg-violet-100 border">
    <div className="md:w-2/3 w-full">
      <AppImage
        src="https://appeal-rice-stuff.figma.site/_assets/v9/fa185f92457c01f4c2ab992f16dab02624634ed7.png?w=2048"
        alt="Training Image"
        className="w-full"
      />
    </div>
    <div className="md:w-1/3 w-full">
      <InfoCard
        title="FOR THE COMMITTED"
        description="Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits."
      />
    </div>
  </div>
);

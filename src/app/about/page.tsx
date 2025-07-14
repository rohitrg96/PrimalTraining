import { TwoColumnSection } from '@/components/about/TwoColumnSection';
import { AppImage } from '@/components/common/AppImage';
import { ABOUT_SECTIONS } from '@/const/about';

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-[90px] font-extrabold pl-8 py-5">
        <span className="text-black">ABOUT US</span>
      </h1>

      {ABOUT_SECTIONS.map((section, index) => (
        <TwoColumnSection key={index} {...section} />
      ))}

      {/* Full Width Image Section */}
      <div className="relative w-full h-[400px] md:h-[400px] lg:h-[500px]">
        <AppImage
          src="https://appeal-rice-stuff.figma.site/_assets/v9/791bae17ad08baae9fda5aa37defc5633c7d757e.png?w=1024"
          alt="Reconnect"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 lg:left-13 text-white">
          <p className="text-2xl lg:text-4xl font-bold lg:max-w-[52%] md:max-w-[90%] max-w-[90%]">
            WE'HE CREATED A SPACE WHERE YOU CAN RECONNECT WITH YOUR PRIMAL SELF.
          </p>
        </div>
      </div>
    </div>
  );
}

import { TwoColumnSection } from "@/components/about/TwoColumnSection";

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-[90px] font-extrabold pl-8 py-5">
        <span className="text-black">ABOUT US</span>
      </h1>

      <TwoColumnSection
        title="TAP INTO YOUR PRIMAL POWER. FORGE A STRONGER YOU."
        subtitle="OUR VISION"
        content={`Primal Training is committed to delivering a training experience rooted in raw strength, functional fitness, and unwavering community support. We empower our members to tap into their primal power, achieve their goals, and live a life of strength, resilience, and unwavering determination.`}
        imageUrl="https://appeal-rice-stuff.figma.site/_assets/v9/ef72b864ed07b41bf9effb410fcc330746c8d84b.png"
        reverse={true}
        bgColor="bg-violet-100"
        imageWidthClasses="lg:w-1/3 sm:w-1/2"
      />

      <TwoColumnSection
        title="DYNAMIC OPEN GYM"
        content={`At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches guide you through intense, functional workouts designed to build raw strength, resilience, and a body capable of anything.`}
        imageUrl="https://appeal-rice-stuff.figma.site/_assets/v9/fb55682ef99b9f87de5e06be83a9d2924b27ee89.png?w=1024"
        reverse={false}
        bgColor="bg-violet-50"
        imageWidthClasses="lg:w-2/3 sm:w-1/2"
        contentWidthClasses="md:w-1/2 lg:w-1/3"
      />
    </div>
  );
}

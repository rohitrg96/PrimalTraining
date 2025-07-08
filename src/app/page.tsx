import { InfoCard } from "@/components/home/InfoCard";

export default function HomePage() {
  return (
    <div>
      {/* Top Heading */}
      <h1 className="text-4xl md:text-[90px] font-extrabold pl-8 py-5">
        <span className="text-black">TRAIN HARD.</span>{" "}
        <span className="text-violet-400">LIVE BETTER</span>
      </h1>

      {/* First Row */}
      <div className="flex flex-col md:flex-row md:items-start w-full bg-violet-100 border">
        {/* Image - 2/3 */}
        <div className="md:w-2/3 w-full">
          <img
            src="https://appeal-rice-stuff.figma.site/_assets/v9/fa185f92457c01f4c2ab992f16dab02624634ed7.png?w=2048"
            alt="Training Image"
            className="w-full h-auto"
          />
        </div>

        {/* Text - 1/3 */}
        <div className="md:w-1/3 w-full">
          <InfoCard
            title="FOR THE COMMITTED"
            description={`Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.`}
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 border">
        {/* Image — Comes First on sm, Last on md+ */}
        <div className="order-1 md:order-3">
          <img
            src="http://appeal-rice-stuff.figma.site/_assets/v9/4b3ae65ece4bb9cc6a2f518907d80df4631625fe.png"
            alt="Gym Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Guided by Experts */}
        <InfoCard
          title="GUIDED BY EXPERTS"
          description={`We believe in creating a positive environment where you can thrive. We're here to help you achieve your goals and unlock your full potential.`}
          className="border-r border-b order-2 md:order-1"
        />

        {/* Dynamic Open Gym */}
        <InfoCard
          title="DYNAMIC OPEN GYM"
          description={`Our facility is the optimal environment for strength training and performance, fully equipped with top-of-the-line tools, ample training areas, and a focus on functional movement.`}
          className="order-3 md:order-2"
        />
      </div>

      <h1 className="sm:text-4xl text-3xl md:text-[90px] font-extrabold sm:pl-8 pl-3 py-5">
        <span className="text-black">JOIN THE </span>{" "}
        <span className="text-violet-400">COMMUNITY</span>
      </h1>
      <div className="flex flex-col md:flex-row w-full bg-violet-50">
        {/* Image - responsive sizing */}
        <div className="w-full md:w-1/2 lg:w-2/3 order-1 md:order-2">
          <img
            src="https://appeal-rice-stuff.figma.site/_assets/v9/c695b3171f8fc21be9574c7eeb04e5365a7dd496.png"
            alt="Training Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 lg:w-1/3 order-2 md:order-1 flex flex-col justify-between border-1">
          {/* Row 1 */}
          <div className="border-b p-4">
            <h2 className="sm:text-4xl text-2xl font-bold">
              DISCOVER YOUR POTENTIAL
            </h2>
          </div>

          {/* Row 2 */}
          <div className="border-b p-3 space-y-1">
            <h3 className="sm:text-2xl text-xl font-bold">EXPERT COACHING</h3>
            <p className="text-gray-700 text-lg">
              Trainers who are passionate about your progress.
            </p>
          </div>

          {/* Row 3 */}
          <div className="border-b p-4 space-y-2">
            <h3 className="sm:text-2xl text-xl font-bold">
              RESULTS-DRIVEN PROGRAMS
            </h3>
            <p className="text-gray-700 text-lg">
              Workouts that deliver tangible, measurable results.
            </p>
          </div>

          {/* Row 4 */}
          <div className="border-b p-4 space-y-2">
            <h3 className="sm:text-2xl text-xl font-bold">
              A SUPPORTIVE TRIBE
            </h3>
            <p className="text-gray-700 text-lg">
              A community that pushes you to be your best.
            </p>
          </div>

          {/* Row 5 - Button */}
          <div className="p-4">
            <button className="hover:bg-black text-gray-500 px-4 py-2 font-semibold hover:border hover:text-white border-black transition rounded-lg">
              VIEW CLASSES
            </button>
          </div>
        </div>
      </div>

      {/* Card Container */}
    </div>
  );
}

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
        <div className="md:w-1/3 w-full p-4 flex flex-col h-full">
          <h2 className="text-4xl font-bold w-8/12">FOR THE COMMITTED</h2>
          <p className="text-gray-700 mt-auto">
            Train like an athlete with top-tier equipment and expert
            programming. Whether you're building muscle or breaking PRs, we help
            you push past limits.
          </p>
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
        <div className="order-2 md:order-1 p-6 bg-violet-100 border-r flex flex-col h-full">
          <h3 className="text-5xl font-bold">GUIDED BY EXPERTS</h3>
          <div className="mt-auto w-11/12">
            <p className="text-gray-700 mb-7">
              We believe in creating a positive environment where you can
              thrive. We're here to help you achieve your goals and unlock your
              full potential.
            </p>
          </div>
        </div>

        {/* Dynamic Open Gym */}
        <div className="order-3 md:order-2 p-6 bg-violet-100 flex flex-col h-full">
          <h3 className="text-5xl font-bold">DYNAMIC OPEN GYM</h3>
          <div className="mt-auto mb-1 w-11/12">
            <p className="text-gray-700 mt-auto">
              Our facility is the optimal environment for strength training and
              performance, fully equipped with top-of-the-line tools, ample
              training areas, and a focus on functional movement.
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-[90px] font-extrabold pl-8 py-5">
        <span className="text-black">JOIN THE </span>{" "}
        <span className="text-violet-400">COMMUNITY</span>
      </h1>
      <div className="flex flex-col md:flex-row w-full bg-violet-50">
        {/* Image - 2/3 - Comes First on sm, Last on md+ */}
        <div className="md:w-2/3 w-full order-1 md:order-2 h-400px">
          <img
            src="https://appeal-rice-stuff.figma.site/_assets/v9/c695b3171f8fc21be9574c7eeb04e5365a7dd496.png"
            alt="Training Image"
            className="w-full h-auto"
          />
        </div>

        {/* Text - 1/3 */}
        <div className="md:w-1/3 w-full order-2 md:order-1 flex flex-col justify-between border-1">
          {/* Row 1 */}
          <div className="border-b p-4">
            <h2 className="text-4xl font-bold">DISCOVER YOUR POTENTIAL</h2>
          </div>

          {/* Row 2 */}
          <div className="border-b p-3 space-y-1">
            <h3 className="text-2xl font-bold">EXPERT COACHING</h3>
            <p className="text-gray-700 text-lg">
              Trainers who are passionate about your progress.
            </p>
          </div>

          {/* Row 3 */}
          <div className="border-b p-4 space-y-2">
            <h3 className="text-2xl font-bold">RESULTS-DRIVEN PROGRAMS </h3>
            <p className="text-gray-700 text-lg">
              Workouts that deliver tangible, measurable results.
            </p>
          </div>

          {/* Row 4 */}
          <div className="border-b p-4 space-y-2">
            <h3 className="text-2xl font-bold">A SUPPORTIVE TRIBE</h3>
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
      <div className="w-full h-110 bg-violet-400 flex flex-col items-center justify-center text-center py-12 space-y-5">
        {/* Heading */}
        <h2 className="md:text-lg">WHAT WE BELIEVE IN</h2>

        {/* Subheading */}
        <p className="text-4xl md:text-5xl font-bold">
          JOIN THE PRIMAL TRIBE TODAY!
        </p>

        {/* Button */}
        <button className="mt-4 px-6 py-3 uppercase bg-white text-black font-semibold hover:bg-black hover:text-white transition  border-black rounded-xl">
          Reserve Your Spot
        </button>
      </div>

      {/* Wrapper Section */}
      {/* Card Container */}
      <div className="w-full bg-violet-100 text-black p-6 flex flex-col justify-between h-full min-h-[400px]">
        {/* Top Section - Logo and Brand */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex">
              <span className="h-16 w-8 rounded-l-full bg-black mt-4"></span>

              <span className="h-20 w-10 rounded-l-full bg-black mt-2"></span>

              <span className="h-24 w-24 rounded-full bg-black"></span>
            </div>
          </div>

          {/* Brand */}
          <h2 className="text-5xl font-bold mt-4 md:mt-0">PrimalTraining</h2>
        </div>

        {/* Spacer to push bottom content down */}
        <div className="flex-grow"></div>

        {/* Bottom Section - Three Columns */}
        {/* Bottom Section - Three Columns */}
        <div className="flex flex-col md:flex-row md:justify-between w-full text-left mt-6 space-y-6 md:space-y-0">
          {/* Left Column */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold">CONTACT</h3>
            <p className="font-semibold">Email: hello@figma.com </p>
            <p className="font-semibold">Phone: (203) 555-5555</p>
          </div>

          {/* Center Column */}
          <div className="w-full md:w-1/3 sm:text-center">
            <h3 className="text-lg font-semibold">Opening Hours</h3>
            <p className="font-semibold">MON – FRI: 5:00 – 23:00</p>
            <p className="font-semibold">SATURDAYS: 8:00 – 16:00</p>
            <p className="font-semibold">SUNDAYS: 8:00 – 13:00</p>
            <p className="font-semibold">HOLIDAYS: 8:00 – 16:00</p>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/3  md:text-right text-left">
            <h3 className="text-lg font-semibold">Social</h3>
            <p className="font-semibold">Instagram</p>
            <p className="font-semibold">X</p>
            <p className="font-semibold">LinkedIn</p>
            <p className="font-semibold">Spotify</p>
          </div>
        </div>
      </div>
    </div>
  );
}

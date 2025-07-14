import { AppImage } from '../common/AppImage';

export const JoinCommunitySection = () => (
  <>
    <h1 className="sm:text-4xl text-3xl md:text-[90px] font-extrabold sm:pl-8 pl-3 py-5">
      <span className="text-black">JOIN THE </span>
      <span className="text-violet-400">COMMUNITY</span>
    </h1>
    <div className="flex flex-col md:flex-row w-full bg-violet-50">
      <div className="w-full md:w-1/2 lg:w-2/3 order-1 md:order-2">
        <AppImage
          src="https://appeal-rice-stuff.figma.site/_assets/v9/c695b3171f8fc21be9574c7eeb04e5365a7dd496.png"
          alt="Join Community"
          className="w-full h-full"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 order-2 md:order-1 flex flex-col justify-between border-1">
        {[
          {
            title: 'DISCOVER YOUR POTENTIAL',
            description: '',
            border: 'border-b p-4',
          },
          {
            title: 'EXPERT COACHING',
            description: 'Trainers who are passionate about your progress.',
            border: 'border-b p-3 space-y-1',
          },
          {
            title: 'RESULTS-DRIVEN PROGRAMS',
            description: 'Workouts that deliver tangible, measurable results.',
            border: 'border-b p-4 space-y-2',
          },
          {
            title: 'A SUPPORTIVE TRIBE',
            description: 'A community that pushes you to be your best.',
            border: 'border-b p-4 space-y-2',
          },
        ].map(({ title, description, border }, index) => (
          <div className={border} key={index}>
            <h3 className="sm:text-2xl text-xl font-bold">{title}</h3>
            {description && <p className="text-gray-700 text-lg">{description}</p>}
          </div>
        ))}

        <div className="p-4">
          <button className="hover:bg-black text-gray-500 px-4 py-2 font-semibold hover:border hover:text-white border-black transition rounded-lg">
            VIEW CLASSES
          </button>
        </div>
      </div>
    </div>
  </>
);

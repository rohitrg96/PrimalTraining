import { cards } from '@/const/reserve';

export const ClassCardsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-b">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-violet-100 p-6 flex flex-col justify-between min-h-[350px] sm:border-r border-b"
        >
          {/* Heading */}
          <h2 className="text-black font-bold sm:text-4xl text-2xl uppercase mb-4">
            {card.heading}
          </h2>

          {/* Content */}
          <div className="flex flex-col gap-3 my-10">
            {card.content.map((line, i) => (
              <p
                key={i}
                className="text-black sm:text-lg font-normal border-b border-black/20 pb-1"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Button */}
          <button className="mt-auto px-4 py-2 bg-violet-400 text-black font-semibold rounded-md transition hover:bg-black hover:text-white cursor-pointer">
            Reserve Your Spot
          </button>
        </div>
      ))}
    </div>
  );
};

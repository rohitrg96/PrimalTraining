import { ClassCardsSection } from "@/components/reserve/ClassCardsSection";

export default function ReservePage() {
  return (
    <div>
      {/* Top Heading */}
      <h1 className="text-4xl md:text-[90px] font-extrabold pl-8 py-5">
        <span className="text-black">BOOK A</span>{" "}
        <span className="text-violet-400">SESSION</span>
      </h1>
      <ClassCardsSection />
    </div>
  );
}

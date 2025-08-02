import { useInView } from "react-intersection-observer";
import { TechCard } from "./components/TechCard";
import { usePaginacion } from "./hooks/usePaginacion";

const TechSection = () => {
  const { currentItems, handleNext, handlePrev, startIndex } = usePaginacion();

  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  return (
    <div
      ref={ref}
      className={`w-full min-h-[100vh] transition-opacity ease-in-out duration-300  ${
        inView ? "opacity-100" : "opacity-[0%]"
      }`}
    >
      <header className="p-4">
        <small className="text-[16px] text-black">
          (Stack and Technologies)
        </small>
      </header>
      {/* Mapper de tecnologias y leanguajes */}
      <aside className="w-full  grid grid-cols-[repeat(auto-fill,300px)] gap-4 place-content-center">
        {currentItems.map((items) => (
          <TechCard key={items.id} imageUrl={items.url} techName={items.name} />
        ))}
      </aside>
      <aside className="w-full mt-8 mb-8 h-4 flex flex-row gap-2 justify-center items-center">
        <span onClick={handlePrev}>Prev</span>
        <span>{startIndex}</span>
        <span onClick={handleNext}>Next</span>
      </aside>
    </div>
  );
};

export default TechSection;

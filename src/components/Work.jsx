import { useState } from "react";
import { works } from "../constants";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";

const Work = () => {
  const [displayCount, setDisplayCount] = useState(4);

  const visibleWorks = works.slice(0, displayCount);
  const hasMoreWorks = displayCount < works.length;

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + 2);
  };

  return (
    <section id="work" className="min-h-screen space-y-8">
      <SectionHeading title="Selected Work" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        {visibleWorks.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
      {hasMoreWorks && (
        <div className="flex justify-center">
          <button
            onClick={handleShowMore}
            className="rounded-full h-10 cursor-pointer bg-neutral-0 px-6 py-2 text-sm font-medium text-neutral-1000"
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
};

export default Work;

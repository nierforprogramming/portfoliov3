import { useState } from "react";
import { works } from "../constants";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";
import FadeUp from "./FadeUp";
import { GoChevronDown } from "react-icons/go";
import { motion } from "motion/react";
import RollOver from "./RollOver";

const Work = () => {
  const [displayCount, setDisplayCount] = useState(6);

  const visibleWorks = works.slice(0, displayCount);
  const hasMoreWorks = displayCount < works.length;

  const handleShowMore = () => {
    setDisplayCount((prev) => prev + 2);
  };

  return (
    <section id="work" className="min-h-screen space-y-8">
      <FadeUp>
        <SectionHeading title="Selected Work" />
      </FadeUp>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        {visibleWorks.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
      {hasMoreWorks && (
        <div className="flex justify-center">
          <motion.button
            initial="initial"
            whileHover="hover"
            onClick={handleShowMore}
            className="rounded-full h-10 flex gap-1 items-center cursor-pointer bg-neutral-0 px-6 py-2 text-sm font-medium text-neutral-1000"
          >
            Show More
            <RollOver>
              <GoChevronDown />
            </RollOver>
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Work;

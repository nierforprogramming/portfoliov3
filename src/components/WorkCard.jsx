import { RiArrowRightLongLine } from "react-icons/ri";

import { motion } from "motion/react";

import RollOver from "./RollOver";

const WorkCard = ({ work }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      href={work.url}
      target="_blank"
      className="
        bg-neutral-800
        border-2
        border-neutral-1000
        rounded-xl
        p-4
        sm:p-5
        md:p-6
        cursor-pointer
        space-y-4
      "
    >
      <div
        className="
          bg-neutral-1000
          px-3
          sm:px-4
          h-10
          rounded-full
          flex
          items-center
          justify-between
          gap-3
        "
      >
        <div className="flex items-center gap-2 min-w-0">
          <h2
            className="
              text-xs
              text-neutral-300
              sm:text-sm
              md:text-base
              font-medium
              truncate
            "
          >
            {work.name}
          </h2>

          <span className="text-neutral-700">•</span>

          <p
            className="
              text-[10px]
              sm:text-xs
              md:text-sm
              text-neutral-300
              truncate
            "
          >
            {work.category}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <RollOver
            className="
      text-[10px]
      sm:text-xs
      md:text-sm
    "
            top={<span>{work.year}</span>}
            bottom={<RiArrowRightLongLine />}
          />
        </div>
      </div>

      <div
        className="overflow-hidden rounded-xl transition-transform
            duration-300
            hover:-translate-y-1.5"
      >
        <img
          src={work.image}
          alt={work.name}
          className="
            w-full
            h-auto"
        />
      </div>
    </motion.a>
  );
};

export default WorkCard;

import { motion } from "motion/react";

const transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

const topIcon = {
  initial: { y: "0%" },
  hover: { y: "-100%" },
};

const bottomIcon = {
  initial: { y: "100%" },
  hover: { y: "0%" },
};

const HoverIconSwap = ({ icon: Icon, className = "", iconClassName = "" }) => {
  return (
    <div
      className={`
        relative
        h-5
        w-5
        overflow-hidden
        ${className}
      `}
    >
      {/* TOP ICON */}
      <motion.div
        variants={topIcon}
        transition={transition}
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <Icon className={iconClassName} />
      </motion.div>

      {/* BOTTOM ICON */}
      <motion.div
        variants={bottomIcon}
        transition={transition}
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <Icon className={iconClassName} />
      </motion.div>
    </div>
  );
};

export default HoverIconSwap;

import { motion } from "motion/react";

const transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

const RollOver = ({
  children,
  top,
  bottom,
  offset = 150,
  className = "",
  innerClassName = "",
}) => {
  const topContent = top || children;
  const bottomContent = bottom || children;

  const topVariants = {
    initial: {
      y: "0%",
    },
    hover: {
      y: `-${offset}%`,
    },
  };

  const bottomVariants = {
    initial: {
      y: `${offset}%`,
    },
    hover: {
      y: "0%",
    },
  };

  return (
    <div
      className={`
        relative
        overflow-hidden
        ${className}
      `}
    >
      {/* TOP */}
      <motion.div
        variants={topVariants}
        transition={transition}
        className={`
          absolute
          inset-0
          flex
          items-center
          justify-center
          ${innerClassName}
        `}
      >
        {topContent}
      </motion.div>

      {/* BOTTOM */}
      <motion.div
        variants={bottomVariants}
        transition={transition}
        className={`
          absolute
          inset-0
          flex
          items-center
          justify-center
          ${innerClassName}
        `}
      >
        {bottomContent}
      </motion.div>

      {/* PLACEHOLDER */}
      <div className="opacity-0">{topContent}</div>
    </div>
  );
};

export default RollOver;

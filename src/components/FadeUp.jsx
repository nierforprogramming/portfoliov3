import { motion } from "motion/react";

const FadeUp = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  y = 30,
  once = true,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;

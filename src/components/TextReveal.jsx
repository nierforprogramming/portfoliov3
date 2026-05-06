import { motion } from "motion/react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TextReveal = ({ text, className = "", once = true }) => {
  const lines = text.split("\n");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={className}
    >
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div variants={item} className="will-change-transform">
            {line}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default TextReveal;

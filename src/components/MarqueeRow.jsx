import { motion } from "motion/react";
import StackCard from "./StackCard";

import { stackItems } from "../constants/";

export default function MarqueeRow({ direction = "left", duration = 35 }) {
  return (
    <div className="overflow-x-hidden overflow-y-visible py-2">
      <motion.div
        className="flex w-max gap-3 md:gap-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration,
        }}
      >
        {[...stackItems, ...stackItems].map((item, index) => (
          <StackCard key={index} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

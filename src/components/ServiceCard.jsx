import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiPlus, FiX } from "react-icons/fi";

export default function ServiceCard({ service }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      layout
      transition={{
        layout: {
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="relative hover:bg-neutral-700 transition-colors duration-300 overflow-hidden cursor-pointer rounded-3xl border-2 border-neutral-1000 bg-neutral-800 p-6"
    >
      {/* card */}
      <div className="flex items-start justify-between gap-4">
        <div className="max-w-2xl">
          <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] font-medium tracking-tight text-neutral-0">
            {service.title}
          </h2>

          <p className="mt-2 text-[14px] md:text-[16px] leading-relaxed text-neutral-300">
            {service.description}
          </p>
        </div>

        {/* TOGGLE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="shrink-0 min-h-10 min-w-10 flex h-10 w-10 items-center justify-center cursor-pointer rounded-full border-2 border-neutral-1000 bg-neutral-800 backdrop-blur transition"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <FiX className="text-[14px] md:text-[16px] text-neutral-0" />
            ) : (
              <FiPlus className="text-[14px] md:text-[16px] text-neutral-0" />
            )}
          </motion.div>
        </button>
      </div>

      {/* EXPANDABLE CONTENT */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{
              height: {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="overflow-hidden"
          >
            <div className="pt-4">
              <ul className="space-y-1 text-lg text-neutral-300">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-300" />
                    <span className="text-[14px] md:text-[16px]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full h-10 cursor-pointer bg-neutral-0 px-5 py-2 text-sm font-medium text-neutral-1000">
                  Get In Touch
                </button>

                <button className="rounded-full h-10 cursor-pointer border border-neutral-0 px-5 py-2 text-sm font-medium text-neutral-0">
                  Book a Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

import { useState } from "react";

import { motion, AnimatePresence } from "motion/react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { PiReadCvLogo } from "react-icons/pi";

import { links } from "../constants";
import RollOver from "./RollOver";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-3 py-4 md:px-8 xl:px-16 2xl:px-0">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#home"
            className="
              bg-neutral-800
              border
              border-neutral-1000
              px-4
              py-2
              rounded-full
              cursor-pointer
              shrink-0
            "
          >
            <h1 className="font-semibold">Niraj</h1>
          </a>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* DESKTOP NAV */}
            <motion.nav
              animate={{
                width: isOpen ? "auto" : 44,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                hidden
                md:flex
                h-11
                overflow-hidden
                rounded-full
                border
                border-neutral-1000
                bg-neutral-1000
                items-center
                justify-end
              "
            >
              {/* LINKS */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -8,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -8,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      flex
                      items-center
                      gap-6
                      px-5
                    "
                  >
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className="
                          text-sm
                          font-medium
                          hover:text-neutral-300
                          text-neutral-0
                          transition-colors
                          whitespace-nowrap
                        "
                      >
                        {link.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* TOGGLE */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                  relative
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  rounded-full
                  justify-center
                  bg-neutral-800
                  cursor-pointer
                "
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{
                        rotate: -90,
                        opacity: 0,
                        scale: 0.7,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        rotate: 90,
                        opacity: 0,
                        scale: 0.7,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        absolute
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full"
                    >
                      <RiCloseLine className="text-base" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{
                        rotate: 90,
                        opacity: 0,
                        scale: 0.7,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        rotate: -90,
                        opacity: 0,
                        scale: 0.7,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        absolute
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full"
                    >
                      <RiMenu3Line className="text-base" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.nav>

            {/* MOBILE NAV */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-neutral-1000"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close-mobile"
                      initial={{
                        rotate: -90,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: 90,
                        opacity: 0,
                      }}
                    >
                      <RiCloseLine />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu-mobile"
                      initial={{
                        rotate: 90,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: -90,
                        opacity: 0,
                      }}
                    >
                      <RiMenu3Line />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* MOBILE DROPDOWN */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      absolute
                      left-3
                      right-3
                      top-20
                      rounded-3xl
                      border
                      border-neutral-1000
                      bg-neutral-800
                      p-5
                      shadow-2xl"
                  >
                    <div className="flex flex-col items-center gap-6 py-6">
                      {links.map((link) => (
                        <a
                          key={link.label}
                          href={link.path}
                          onClick={() => setIsOpen(false)}
                          className="
                            text-lg
                            font-medium"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>

                    <motion.a
                      href="/resume.pdf"
                      download
                      initial="initial"
                      whileHover="hover"
                      className="
                        flex
                        h-12
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-neutral-0
                        text-sm
                        font-medium
                        text-white
                      "
                    >
                      <RollOver>
                        <span>Download CV</span>
                      </RollOver>

                      <RollOver className="h-4 w-4">
                        <PiReadCvLogo />
                      </RollOver>
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* DESKTOP DOWNLOAD BUTTON */}
            <motion.div
              initial="initial"
              whileHover="hover"
              className="
                hidden
                md:flex
                bg-neutral-0
                text-white
                rounded-full
                h-11
                px-4
                text-sm
                gap-2
                items-center
                shrink-0
              "
            >
              <a href="/resume.pdf" download>
                <span>Download CV</span>
              </a>

              <RollOver className="h-4 w-4" offset={120}>
                <PiReadCvLogo />
              </RollOver>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

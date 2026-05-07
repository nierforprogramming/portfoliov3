import { motion } from "motion/react";

import { links, socials } from "../constants";
import FadeUp from "./FadeUp";
import { RiArrowRightLongLine } from "react-icons/ri";
import HoverIconSwap from "./HoverIconSwap";

const Footer = () => {
  return (
    <FadeUp>
      <footer className="bg-neutral-0 px-6 py-10 lg:px-12 lg:py-15 rounded-xl flex flex-col lg:flex-row gap-8">
        <div className="space-y-6 flex-1">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-neutral-1000"></div>
            <h2 className="font-accent tracking-wider capitalize font-medium italic text-[22px] lg:text-[30px] text-neutral-1000">
              Let’s bring your vision to life!
            </h2>
          </div>
          <p className="text-neutral-500 text-[14px] lg:text-[16px]">
            Looking to start a new project, rebuild your website, or just want
            to chat about your ideas? I’d love to hear from you!
          </p>

          <motion.button
            initial="initial"
            whileHover="hover"
            className="rounded-full flex gap-1 items-center h-10 cursor-pointer bg-neutral-1000 px-6 py-2 text-sm font-medium text-neutral-0"
          >
            Reach Out
            <HoverIconSwap icon={RiArrowRightLongLine} />
          </motion.button>
        </div>

        <div className="flex flex-col lg:justify-end lg:items-end lg:text-right flex-1 space-y-4">
          <div className="flex items-center gap-2">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-1000 cursor-pointer hover:text-neutral-500"
                >
                  <Icon className="text-xl" />
                </a>
              );
            })}
          </div>

          <div className="space-x-4 flex">
            {links.map((link, index) => (
              <a
                className="text-neutral-1000 hover:text-neutral-500 text-sm font-medium"
                href={link.path}
                key={index}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </FadeUp>
  );
};

export default Footer;

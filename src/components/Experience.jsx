import { experience } from "../constants";
import ExperienceCard from "./ExperienceCard";
import FadeUp from "./FadeUp";
import SectionHeading from "./SectionHeading";
import TextReveal from "./TextReveal";

const Experience = () => {
  return (
    <section id="experience" className="space-y-8 py-20">
      <FadeUp>
        <SectionHeading title="Experience" />
      </FadeUp>

      <TextReveal
        text={`   My journey through frontend development, collaborative product building,
        and real-world engineering experience.`}
        className="text-xl md:text-[24px] lg:text-[32px] font-medium"
      />
      {experience.map((experience, index) => (
        <FadeUp key={index} delay={index * 0.08}>
          <ExperienceCard experience={experience} />
        </FadeUp>
      ))}
    </section>
  );
};

export default Experience;

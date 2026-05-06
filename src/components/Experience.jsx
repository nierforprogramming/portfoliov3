import { experience } from "../constants";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section id="experience" className="space-y-8 py-20">
      <SectionHeading title="Experience" />

      <h2 className="text-xl md:text-[24px] lg:text-[32px] font-medium">
        My journey through frontend development, collaborative product building,
        and real-world engineering experience.
      </h2>
      {experience.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </section>
  );
};

export default Experience;

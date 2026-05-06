import { experience } from "../constants";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  return (
    <section className="space-y-5 py-20">
      <SectionHeading title="Experience" />
      {experience.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </section>
  );
};

export default Experience;

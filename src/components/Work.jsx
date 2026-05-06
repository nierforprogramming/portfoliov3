import { works } from "../constants";
import SectionHeading from "./SectionHeading";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <section className="min-h-screen space-y-8">
      <SectionHeading title="Selected Work" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        {works.map((work, index) => (
          <WorkCard key={index} work={work} />
        ))}
      </div>
    </section>
  );
};

export default Work;

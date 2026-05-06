import SectionHeading from "./SectionHeading";
import myImage from "../assets/me.jpg";
import TextReveal from "./TextReveal";
import FadeUp from "./FadeUp";

const AboutMe = () => {
  return (
    <section className="items-center space-y-8 py-40">
      <FadeUp>
        <div>
          <SectionHeading title="About Me" />
        </div>
      </FadeUp>

      <div className="space-y-8 flex flex-col lg:flex-row-reverse md:gap-8">
        <div className="aspect-video flex-1 lg:max-w-xl overflow-hidden rounded-md border-2 border-neutral-1000  object-cover">
          <img src={myImage} alt="Me" className="object-cover h-full w-full" />
        </div>
        <div className="flex-1">
          <TextReveal
            text={` I’m a Frontend developer with 5 years of hands-on experience
            creating fast, responsive, and user-friendly web applications using
            a range of modern technologies.`}
            className="text-xl md:text-[24px] lg:text-[32px] font-medium"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

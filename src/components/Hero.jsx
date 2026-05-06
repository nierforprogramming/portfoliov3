import FadeUp from "./FadeUp";
import TextReveal from "./TextReveal";

const Hero = () => {
  return (
    <main
      id="home"
      className="flex flex-col space-y-4 pt-16 pb-10 md:py-28 xl:py-34"
    >
      <section className="flex items-center gap-2">
        <div className="bg-green-400 w-3 h-3 rounded-full"></div>
        <FadeUp>
          <h2 className="font-accent italic text-xl md:text-2xl">
            Available For Work
          </h2>
        </FadeUp>
      </section>
      <section>
        <TextReveal
          text={`I'm Niraj,\nCrafting modern\nweb experiences from Nepal.`}
          className="text-[40px] md:text-[52px] xl:text-7xl font-medium leading-tight"
        />
      </section>
    </main>
  );
};

export default Hero;

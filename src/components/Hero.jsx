const Hero = () => {
  return (
    <main className=" min-h-[55vh] sm:min-h-[60vh] lg:min-h-[65vh] flex flex-col justify-center space-y-4 pt-16 sm:pt-20 pb-10 sm:pb-14 md:pb-20 ">
      <section className="flex items-center gap-2">
        <div className="bg-green-400 w-3 h-3 rounded-full"></div>
        <h2 className="font-accent italic text-xl md:text-2xl">
          Available For Work
        </h2>
      </section>
      <section>
        <h2 className="text-[40px] md:text-[52px] xl:text-7xl font-medium leading-tight">
          I'm Niraj, Crafting modern <br />
          web experiences from Nepal.
        </h2>
      </section>
    </main>
  );
};

export default Hero;

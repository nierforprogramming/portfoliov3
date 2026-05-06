const SectionHeading = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-dot-gradient w-3 h-3 rounded-full"></div>
      <h2 className="font-accent italic text-xl md:text-2xl">{title}</h2>
    </div>
  );
};

export default SectionHeading;

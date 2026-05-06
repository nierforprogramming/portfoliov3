export default function ExperienceCard({ experience }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-neutral-1000 bg-neutral-800 p-6">
      {/* card */}
      <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-4">
        <div className="font-medium">{experience.duration}</div>
        <div className="max-w-2xl">
          <h2 className="text-[16px] lg:text-[20px] xl:text-[24px] font-medium tracking-tight text-neutral-0">
            {experience.company}
          </h2>
          <span className="text-[14px] md:text-[16px] leading-relaxed font-medium text-neutral-300">
            {experience.role}
          </span>
          <p className="mt-2 text-[14px] md:text-[16px] leading-relaxed text-neutral-300">
            {experience.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

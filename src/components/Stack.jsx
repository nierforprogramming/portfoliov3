import MarqueeRow from "./MarqueeRow";
import SectionHeading from "./SectionHeading";

export default function Stack() {
  return (
    <section className="relative overflow-hidden bg-neutral-700 py-14 md:py-20 space-y-4">
      <SectionHeading title="My Stack" />
      {/* DOT BACKGROUND */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(var(--color-neutral-500)_1px,transparent_1px)] bg-size-[32px_32px]" />

      {/* MASKED CONTENT */}
      <div
        className="
          relative
          z-20
          space-y-4
          py-2
         mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        "
      >
        <MarqueeRow direction="left" duration={90} />
        <MarqueeRow direction="right" duration={120} />
        <MarqueeRow direction="left" duration={60} />
      </div>
    </section>
  );
}

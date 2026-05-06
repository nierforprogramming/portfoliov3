export default function StackCard({ item }) {
  const coloredSvg = item.icon.svg.replace(
    "<svg",
    `<svg fill="#${item.icon.hex}"`,
  );

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
    group/card
    flex
    min-w-[88px]
    sm:min-w-[96px]
    md:min-w-[110px]
    flex-col
    items-center
    justify-center
    rounded-2xl
    border
    border-neutral-1000/80
    bg-neutral-800
    px-3
    py-3
    sm:px-4
    sm:py-4
    transition-all
    cursor-pointer
    duration-300
    hover:scale-105
  "
    >
      <div
        className="
          flex
          h-7
          w-7
          sm:h-8
          sm:w-8
          md:h-10
          md:w-10
          items-center
          justify-center
          transition-transform
          duration-300
          group-hover/card:scale-110
          [&_svg]:h-full
          [&_svg]:w-full
        "
        dangerouslySetInnerHTML={{
          __html: coloredSvg,
        }}
      />

      <p
        className="
          mt-2
          text-[10px]
          sm:text-[11px]
          md:text-xs
          font-medium
          text-neutral-300
          whitespace-nowrap
        "
      >
        {item.name}
      </p>
    </a>
  );
}

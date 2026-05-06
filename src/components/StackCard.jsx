export default function StackCard({ item }) {
  const isSimpleIcon = item.type === "simple-icons";

  const ReactIcon = item.icon;

  const coloredSvg = isSimpleIcon
    ? item.icon.svg.replace("<svg", `<svg fill="#${item.icon.hex}"`)
    : null;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group/card
        flex
        min-w-22
        sm:min-w-24
        md:min-w-27.5
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
      {/* ICON */}
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
      >
        {isSimpleIcon ? (
          <div
            dangerouslySetInnerHTML={{
              __html: coloredSvg,
            }}
          />
        ) : (
          <ReactIcon
            style={{
              color: item.color,
            }}
            className="h-full w-full"
          />
        )}
      </div>

      {/* TEXT */}
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

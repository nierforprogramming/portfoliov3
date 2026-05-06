export default function StackCard({ item }) {
  const Icon = item.icon;

  return (
    <div
      className="
        group/card
        flex
        min-w-23
        sm:min-w-26.25
        md:min-w-30
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-neutral-1000/80
        bg-neutral-800
        px-3
        py-4
        sm:px-4
        sm:py-5
        transition-all
        cursor-pointer
        duration-300
        hover:scale-105
      "
    >
      <div
        className="
          flex
          h-10
          w-10
          sm:h-12
          sm:w-12
          md:h-14
          md:w-14
          items-center
          justify-center
          rounded-xl
          transition-transform
          duration-300
          group-hover
        "
      >
        <Icon className="text-xl sm:text-2xl md:text-3xl text-neutral-100" />
      </div>

      <p
        className="
          mt-2
          md:mt-3
          text-[11px]
          sm:text-xs
          md:text-sm
          font-medium
          text-neutral-300
          whitespace-nowrap
        "
      >
        {item.name}
      </p>
    </div>
  );
}

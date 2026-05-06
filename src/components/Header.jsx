import { PiReadCvLogo } from "react-icons/pi";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-3 py-4 md:px-8 xl:px-16 2xl:px-0">
        <div className="flex justify-between">
          <a
            href="#home"
            className="
          bg-neutral-800
          border-2
          border-neutral-1000
          px-4
          py-2
          rounded-full
          cursor-pointer
        "
          >
            <h1 className="font-semibold">Niraj</h1>
          </a>

          <nav>
            <div
              className="
            bg-neutral-0
            text-white
            rounded-full
            py-2
            px-5
            text-sm
            flex
            gap-2
            items-center
          "
            >
              <a href="/resume.pdf" download className="cursor-pointer">
                Download CV
              </a>

              <span>
                <PiReadCvLogo />
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

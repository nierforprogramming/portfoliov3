import { PiReadCvLogo } from "react-icons/pi";

const Header = () => {
  return (
    <header className="flex justify-between py-2">
      <a
        href="#"
        className="bg-neutral-800 border-2 border-neutral-1000 px-4 py-2 rounded-full cursor-pointer"
      >
        <h1 className="font-semibold">Niraj</h1>
      </a>
      <nav>
        <div></div>
        <div className="bg-neutral-0 text-white rounded-full py-2 px-5 text-sm flex gap-2 items-center">
          <button className="cursor-pointer">Download CV</button>
          <span>
            <PiReadCvLogo />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

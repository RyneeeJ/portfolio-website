import { PiList, PiX } from "react-icons/pi";

import NavWindow from "./NavWindow";
import { useMobileNav } from "../contexts/MobileNavContext";

function MobileNav() {
  const { isNavOpen, setIsNavOpen } = useMobileNav();

  const iconClass =
    "size-10 cursor-pointer text-gray-darkest dark:text-offWhite";
  return (
    <>
      <button
        className="z-[9999] lg:hidden"
        onClick={() => setIsNavOpen((isOpen) => !isOpen)}
      >
        {!isNavOpen && <PiList className={iconClass} />}
        {isNavOpen && <PiX className={iconClass} />}
      </button>
      {isNavOpen && <NavWindow setIsNavOpen={setIsNavOpen} />}
    </>
  );
}

export default MobileNav;

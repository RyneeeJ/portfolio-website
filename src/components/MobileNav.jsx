import { PiList, PiX } from "react-icons/pi";

import { useState } from "react";
import NavWindow from "./NavWindow";

function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
      {isNavOpen && <NavWindow />}
    </>
  );
}

export default MobileNav;

/* eslint-disable react-refresh/only-export-components */
import { PiAddressBook, PiCode, PiUserCircle, PiWrench } from "react-icons/pi";
import NavLinkItem from "./NavLinkItem";

const iconClass = "size-7 cursor-pointer";
export const navLinks = [
  {
    label: "About",
    icon: <PiUserCircle className={iconClass} />,
    sectionId: "#about",
  },
  {
    label: "Skills",
    icon: <PiWrench className={iconClass} />,
    sectionId: "#skills",
  },
  {
    label: "Projects",
    icon: <PiCode className={iconClass} />,
    sectionId: "#projects",
  },
  {
    label: "Contact",
    icon: <PiAddressBook className={iconClass} />,
    sectionId: "#contact",
  },
];
function DesktopNav() {
  return (
    <nav className="rounded-full bg-gray-light px-4 py-2.5 dark:bg-gray-dark">
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <NavLinkItem
            key={link.label}
            icon={link.icon}
            label={link.label}
            sectionId={link.sectionId}
          />
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNav;

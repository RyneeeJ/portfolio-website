import { PiAddressBook, PiCode, PiUserCircle, PiWrench } from "react-icons/pi";
import NavLinkItem from "./NavLinkItem";

const iconClass = "size-7 cursor-pointer";
const links = [
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
    sectionId: "#contact-me",
  },
];
function DesktopNav() {
  return (
    <nav className="rounded-full bg-gray-light px-4 py-2.5 dark:bg-gray-dark">
      <ul className="flex gap-8">
        {links.map((link) => (
          <NavLinkItem key={link.label} icon={link.icon} label={link.label} />
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNav;

import { PiEnvelope, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { navLinks } from "./DesktopNav";

function NavWindow() {
  const iconClass = "size-8 cursor-pointer text-green-brand";

  return (
    <div className="absolute -right-1 -top-1 w-60 bg-offWhite px-6 py-14 pb-9 shadow-md lg:hidden dark:bg-gray-dark">
      <ul className="mb-10 text-lg tracking-wider">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.sectionId}
              className="block h-full w-full rounded-md px-2 py-1 hover:bg-gray-light dark:hover:bg-gray-medium"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <span className="mb-6 block text-xl uppercase tracking-[0.15em]">
        Get in touch
      </span>
      <div>
        <ul className="flex gap-4">
          <li>
            <a href="https://github.com/RyneeeJ" target="_blank">
              <PiGithubLogo className={iconClass} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ryne-james-gandia-9aa25a255/"
              target="_blank"
            >
              <PiLinkedinLogo className={iconClass} />
            </a>
          </li>
          <li>
            <a>
              <PiEnvelope className={iconClass} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavWindow;

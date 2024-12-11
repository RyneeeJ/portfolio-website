import { PiAt, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { navLinks } from "./DesktopNav";
import { useObserver } from "../contexts/ObserverContext";
import { githubUrl, gmail, linkedInUrl } from "../data/socials";

function NavWindow({ setIsNavOpen }) {
  const iconClass =
    "size-8 cursor-pointer dark:text-green-brand text-gray-dark";
  const { activeSection } = useObserver();

  return (
    <div className="absolute -right-1 -top-1 w-60 bg-offWhite px-6 py-14 pb-9 shadow-md lg:hidden dark:bg-gray-dark">
      <ul className="mb-10 text-lg tracking-wider">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={`#${link.sectionId}`}
              onClick={() => setIsNavOpen(false)}
              className={`block h-full w-full rounded-md px-2 py-1 hover:bg-green-brand dark:hover:bg-green-brand dark:hover:text-gray-dark ${activeSection === link.sectionId ? "bg-green-brand dark:text-gray-dark" : ""}`}
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
            <a href={githubUrl} target="_blank">
              <PiGithubLogo className={iconClass} />
            </a>
          </li>
          <li>
            <a href={linkedInUrl} target="_blank">
              <PiLinkedinLogo className={iconClass} />
            </a>
          </li>
          <li>
            <a href={`mailto:${gmail}`}>
              <PiAt className={iconClass} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavWindow;

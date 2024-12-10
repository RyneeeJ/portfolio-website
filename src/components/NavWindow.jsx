import { PiEnvelope, PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";

function NavWindow() {
  const iconClass = "size-8 cursor-pointer text-green-brand";
  return (
    <div className="absolute -right-1 -top-1 w-60 bg-offWhite px-6 py-14 pb-9 shadow-md lg:hidden dark:bg-gray-dark">
      <ul className="mb-10 space-y-3 text-lg tracking-wider">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
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

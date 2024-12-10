import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";

function SocialLinks() {
  const iconClass =
    "size-8 cursor-pointer text-gray-light dark:text-gray-darkest";
  return (
    <div className="flex gap-4">
      <a href="https://github.com/RyneeeJ" target="_blank">
        <PiGithubLogo className={iconClass} />
      </a>
      <a
        href="https://www.linkedin.com/in/ryne-james-gandia-9aa25a255/"
        target="_blank"
      >
        <PiLinkedinLogo className={iconClass} />
      </a>
    </div>
  );
}

export default SocialLinks;

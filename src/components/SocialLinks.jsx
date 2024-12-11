import { PiGithubLogo, PiLinkedinLogo } from "react-icons/pi";
import { githubUrl, linkedInUrl } from "../data/socials";

function SocialLinks() {
  const iconClass =
    "size-8 cursor-pointer text-gray-light dark:text-gray-darkest";
  return (
    <div className="flex gap-4">
      <a href={githubUrl} target="_blank">
        <PiGithubLogo className={iconClass} />
      </a>
      <a href={linkedInUrl} target="_blank">
        <PiLinkedinLogo className={iconClass} />
      </a>
    </div>
  );
}

export default SocialLinks;

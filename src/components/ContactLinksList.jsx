import {
  PiEnvelopeFill,
  PiLinkedinLogoFill,
  PiReadCvLogoFill,
} from "react-icons/pi";
import { gmail, linkedInUrl } from "../data/socials";
import ContactLinkItem from "./ContactLinkItem";

const iconClass = "size-8 text-gray-light md:size-10";

const contactArr = [
  {
    label: "LinkedIn",
    icon: <PiLinkedinLogoFill className={iconClass} />,
    href: linkedInUrl,
    type: "link",
  },
  {
    label: "Email",
    icon: <PiEnvelopeFill className={iconClass} />,
    href: gmail,
    type: "emai;",
  },
  {
    label: "Resumè",
    icon: <PiReadCvLogoFill className={iconClass} />,
    href: "",
    type: "link",
  },
];
function ContactLinksList() {
  return (
    <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
      {contactArr.map((obj) => (
        <ContactLinkItem
          key={obj.label}
          icon={obj.icon}
          href={obj.href}
          label={obj.label}
          type={obj.type}
        />
      ))}
    </ul>
  );
}

export default ContactLinksList;
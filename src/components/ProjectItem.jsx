import { PiArrowSquareOut, PiGithubLogo } from "react-icons/pi";
import UsedTechList from "./UsedTechList";

const technologies = [
  {
    name: "React",
    iconPath: "/logos/react.svg",
    backgroundColor: "#a8f2ff",
    borderColor: "#01d8ff",
  },
  {
    name: "HTML",
    iconPath: "/logos/html.svg",
    backgroundColor: "#f1946a",
    borderColor: "#ff4c1e",
  },
  {
    name: "Javascript",
    iconPath: "/logos/js.svg",
    backgroundColor: "#f6de1f",
    borderColor: "#9d8c00",
  },
  {
    name: "CSS",
    iconPath: "/logos/css.svg",
    backgroundColor: "#1572b6",
    borderColor: "#37a8db",
  },
  {
    name: "Tailwind",
    iconPath: "/logos/tailwind.svg",
    backgroundColor: "#2298bd",
    borderColor: "#177f9e",
  },
  {
    name: "Supabase",
    iconPath: "/logos/supabase.svg",
    backgroundColor: "#249361",
    borderColor: "#136f46",
  },
  {
    name: "Express",
    iconPath: "/logos/express.svg",
    backgroundColor: "#555555",
    borderColor: "#2c2c2c",
  },
];

function ProjectItem({ project }) {
  const {
    name,
    description,
    thumbnailPath: image,
    techUsed,
    githubLink,
    prodLink,
  } = project;
  const techArray = techUsed.map((techUsed) =>
    technologies.find((technology) => technology.name === techUsed),
  );

  return (
    <li className="group/item mx-auto flex max-w-2xl flex-col gap-3 rounded-lg bg-gray-light p-3 sm:gap-5 sm:p-6 lg:max-w-none lg:flex-row dark:bg-gray-dark">
      <a
        href={prodLink}
        target="_blank"
        className="group/image relative aspect-video w-full overflow-hidden rounded-lg bg-red-50 lg:basis-1/2 lg:group-even/item:order-2"
      >
        <img
          src={image}
          alt={`Screenshot image of ${name} website`}
          className="h-full w-full object-cover transition-all duration-200 group-hover/image:blur-[3px]"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 dark:text-gray-darkest">
          <div className="opacity-0 transition-all duration-200 group-hover/image:opacity-100">
            <PiArrowSquareOut className="size-10 text-gray-dark" />
          </div>
        </div>
      </a>

      <div className="flex flex-col gap-3 sm:gap-5 lg:flex-1">
        <div className="lg:hidden">
          <UsedTechList techArray={techArray} />
        </div>
        <div className="flex justify-between">
          <a
            href={prodLink}
            target="_blank"
            className="cursor-pointer text-2xl font-bold hover:underline sm:text-3xl"
          >
            {name}
          </a>
          <a href={githubLink} target="_blank">
            <PiGithubLogo className="size-8 sm:size-9" />
          </a>
        </div>
        <div className="hidden lg:block">
          <UsedTechList techArray={techArray} />
        </div>
        <p className="text-gray-medium sm:text-lg">{description}</p>
      </div>
    </li>
  );
}

export default ProjectItem;

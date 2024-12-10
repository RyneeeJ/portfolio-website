import { PiGithubLogo } from "react-icons/pi";

function ProjectItem({ name, description, image }) {
  return (
    <li className="group mx-auto flex max-w-2xl flex-col gap-3 rounded-lg bg-gray-light p-3 sm:gap-5 sm:p-6 lg:max-w-none lg:flex-row dark:bg-gray-dark">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-red-50 group-even:order-2 lg:basis-1/2">
        <img
          src={image}
          alt={`Screenshot image of ${name} website`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 sm:gap-5 lg:flex-1">
        <div className="flex justify-between">
          <div className="text-2xl font-bold sm:text-3xl">{name}</div>
          <div>
            <PiGithubLogo className="size-8 sm:size-9" />
          </div>
        </div>
        <p className="text-gray-medium sm:text-lg">{description}</p>
      </div>
    </li>
  );
}

export default ProjectItem;

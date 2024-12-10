import SkillsListItem from "./SkillsListItem";

const skills = [
  {
    name: "HTML",
    iconPath: "/logos/html.svg",
  },
  {
    name: "CSS",
    iconPath: "/logos/css.svg",
  },
  {
    name: "Javascript",
    iconPath: "/logos/js.svg",
  },
  {
    name: "React",
    iconPath: "/logos/react.svg",
  },
  {
    name: "Tailwind CSS",
    iconPath: "/logos/tailwind.svg",
  },
  {
    name: "Git",
    iconPath: "/logos/git.svg",
  },
  {
    name: "Supabase",
    iconPath: "/logos/supabase.svg",
  },
];

function SkillsList() {
  return (
    <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:gap-x-8 lg:grid-cols-3 lg:gap-x-6">
      {skills.map((skill) => (
        <SkillsListItem
          key={skill.name}
          name={skill.name}
          iconPath={skill.iconPath}
        />
      ))}
    </ul>
  );
}

export default SkillsList;

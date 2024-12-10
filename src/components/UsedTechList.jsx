import UsedTechItem from "./UsedTechItem";

function UsedTechList({ techArray }) {
  console.log(techArray);
  return (
    <ul className="flex flex-wrap gap-3">
      {techArray.map((tech) => (
        <UsedTechItem key={tech.name} tech={tech} />
      ))}
    </ul>
  );
}

export default UsedTechList;

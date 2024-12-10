function SkillsListItem({ name, iconPath }) {
  return (
    <li className="flex h-full w-full max-w-72 flex-col items-center justify-center gap-4 rounded-md bg-gray-light px-4 py-4 odd:place-self-end min-[500px]:flex-row md:py-6 lg:place-self-center lg:odd:place-self-center dark:bg-gray-dark">
      <div className="aspect-square h-12">
        <img src={iconPath} alt={name} />
      </div>
      <div className="text-center text-xl md:text-2xl">{name}</div>
    </li>
  );
}

export default SkillsListItem;

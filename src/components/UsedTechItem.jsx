/* eslint-disable no-unused-vars */
function UsedTechItem({ tech }) {
  const { name, iconPath, borderColor, backgroundColor } = tech;

  return (
    <li className="flex items-center gap-2 rounded-md border border-gray-dark px-3 py-1 lg:px-4 dark:border-gray-medium">
      <div>
        <img src={iconPath} className="size-5" />
      </div>
      <div>{name}</div>
    </li>
  );
}

export default UsedTechItem;

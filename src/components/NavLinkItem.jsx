import { useObserver } from "../contexts/ObserverContext";

function NavLinkItem({ icon, sectionId, label }) {
  const { activeSection } = useObserver();

  return (
    <li
      className={`group relative p-1 ${activeSection === sectionId ? "border-green-dark rounded-full border bg-green-brand dark:border-none dark:bg-inherit dark:text-green-brand" : ""}`}
    >
      <a href={`#${sectionId}`}>{icon}</a>
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-light px-3 py-1 text-xs opacity-0 transition-all duration-500 group-hover:-bottom-10 group-hover:opacity-100 dark:bg-gray-dark">
        {label}
      </span>
    </li>
  );
}

export default NavLinkItem;

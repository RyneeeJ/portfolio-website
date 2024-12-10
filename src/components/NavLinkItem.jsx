function NavLinkItem({ icon, sectionId, label }) {
  return (
    <li className="group relative">
      <a href={sectionId}>{icon}</a>
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs opacity-0 transition-all duration-500 group-hover:-bottom-10 group-hover:opacity-100 dark:bg-gray-dark">
        {label}
      </span>
    </li>
  );
}

export default NavLinkItem;

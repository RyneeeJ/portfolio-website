function ContactLinkItem({ href, icon, label, type }) {
  return (
    <li>
      <a
        className="dark:hover:border-green-dark group flex cursor-pointer items-center gap-2 rounded-md border border-gray-dark px-2 py-1 transition-all duration-200 hover:bg-green-brand md:px-4 md:py-1.5 dark:border-gray-medium dark:bg-gray-dark"
        href={type === "link" ? href : `mailto:${href}`}
        target="_blank"
      >
        <span>{icon}</span>
        <span className="group-hover:text-gray-dark md:text-lg dark:text-gray-medium">
          {label}
        </span>
      </a>
    </li>
  );
}

export default ContactLinkItem;

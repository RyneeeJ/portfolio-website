function ContactLinkItem({ href, icon, label, type }) {
  return (
    <li>
      <a
        className="cursor-pointerm flex items-center gap-2 rounded-md border bg-gray-dark px-2 py-1 transition-all duration-200 md:px-4 md:py-1.5 dark:border-gray-medium dark:hover:bg-gray-darkest"
        href={type === "link" ? href : `mailto:${href}`}
        target="_blank"
      >
        <span>{icon}</span>
        <span className="text-gray-medium md:text-lg">{label}</span>
      </a>
    </li>
  );
}

export default ContactLinkItem;

function SectionHeading({ title, type }) {
  return (
    <div
      className={`mb-10 text-center text-5xl font-bold uppercase tracking-wide sm:mb-14 sm:text-6xl md:mb-20 lg:text-7xl ${type === "contact" && "flex flex-col gap-1 sm:gap-3 lg:gap-4"}`}
    >
      <span>{title.at(0)}</span>{" "}
      <span className="text-green-dark">{title.at(1)}</span>
    </div>
  );
}

export default SectionHeading;

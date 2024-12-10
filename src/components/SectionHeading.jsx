function SectionHeading({ title }) {
  return (
    <div className="mb-10 text-center text-5xl font-bold uppercase tracking-wide sm:mb-14 sm:text-6xl md:mb-20 lg:text-7xl">
      <span>{title.at(0)}</span>{" "}
      <span className="text-green-dark">{title.at(1)}</span>
    </div>
  );
}

export default SectionHeading;

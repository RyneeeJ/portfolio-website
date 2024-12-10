function SectionHeading({ title }) {
  return (
    <div className="text-center text-5xl font-bold uppercase tracking-wide sm:text-6xl lg:text-7xl">
      <span>{title.at(0)}</span>{" "}
      <span className="text-green-dark">{title.at(1)}</span>
    </div>
  );
}

export default SectionHeading;

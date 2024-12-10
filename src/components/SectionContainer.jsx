function SectionContainer({ children, type }) {
  return (
    <section
      className={`pb-5 md:px-2 md:pb-8 lg:pb-12 ${type === "hero" && "pt-16"}`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;

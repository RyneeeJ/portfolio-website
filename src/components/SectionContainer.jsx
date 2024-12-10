function SectionContainer({ children, type, sectionId }) {
  return (
    <section
      id={sectionId}
      className={`py-8 md:px-2 md:py-12 lg:py-16 ${type === "hero" && "pt-16"}`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;

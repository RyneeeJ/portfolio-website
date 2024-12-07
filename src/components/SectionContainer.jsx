function SectionContainer({ children, type }) {
  return (
    <section
      className={`py-5 md:px-2 md:py-8 ${type === "hero" && "h-screen"}`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;

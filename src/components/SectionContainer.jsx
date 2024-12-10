function SectionContainer({ children, sectionId }) {
  return (
    <section id={sectionId} className={`pt-16 md:px-2 md:pt-20`}>
      {children}
    </section>
  );
}

export default SectionContainer;

import { useInView } from "react-intersection-observer";
import { useObserver } from "../contexts/ObserverContext";

function SectionContainer({ children, sectionId }) {
  const { setVisibleSections, visibleSections } = useObserver();

  const { ref } = useInView({
    threshold: [0, 0.6, 1],
    onChange: (inView, entry) => {
      // CHeck if section is already listed in visibleSections state
      const sectionAlreadyListed = visibleSections.find(
        (section) => section.name === entry.target.id,
      );

      if (inView && !sectionAlreadyListed) {
        setVisibleSections((arr) => [
          ...arr,
          {
            name: entry.target.id,
            ratio: entry.intersectionRatio,
            top: entry.boundingClientRect.top,
          },
        ]);
      } else if (inView && sectionAlreadyListed) {
        setVisibleSections((arr) =>
          arr.map((section) =>
            section.name === entry.target.id
              ? {
                  ...section,
                  ratio: entry.intersectionRatio,
                  top: entry.boundingClientRect.top,
                }
              : section,
          ),
        );
      } else if (!inView) {
        setVisibleSections((arr) =>
          arr.filter((section) => section.name !== entry.target.id),
        );
      }
    },
  });

  return (
    <section
      ref={ref}
      id={sectionId}
      className={`pt-16 last:pb-24 md:px-2 md:pt-20 md:last:pb-32`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;

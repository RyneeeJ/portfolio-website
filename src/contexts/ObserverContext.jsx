import { createContext, useContext, useEffect, useState } from "react";

const ObserverContext = createContext({
  activeSection: null,
  visibleSections: [],
  setActiveSection() {},
  setVisibleSections() {},
});

export default function ObserverProvider({ children }) {
  const [visibleSections, setVisibleSections] = useState([]);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (visibleSections.length === 1)
      setActiveSection(visibleSections.at(0).name);
    else if (visibleSections.length > 1) {
      const sorted = visibleSections.sort((a, b) => a.top - b.top);
      const active = sorted.at(0).ratio < 0.6 ? sorted.at(1) : sorted.at(0);
      setActiveSection(active.name);
    }
  }, [visibleSections]);
  return (
    <ObserverContext.Provider
      value={{
        activeSection,
        setVisibleSections,
        visibleSections,
      }}
    >
      {children}
    </ObserverContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useObserver() {
  return useContext(ObserverContext);
}

import { createContext, useContext, useState } from "react";

const MobileNavContext = createContext();

export default function MobileNavProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <MobileNavContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </MobileNavContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMobileNav() {
  return useContext(MobileNavContext);
}

import { useEffect, useState } from "react";
import { PiMoon, PiSun } from "react-icons/pi";

import { motion } from "motion/react";

function ToggleTheme() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    if (isDark) document.querySelector("html").classList.add("dark");
    else document.querySelector("html").classList.remove("dark");
  }, [isDark]);

  const handleToggle = () => setIsDark((isDark) => !isDark);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      data-isdark={isDark}
      onClick={handleToggle}
      className={`data- flex w-14 cursor-pointer items-center justify-start rounded-full bg-gray-light p-1 data-[isdark=true]:justify-end dark:bg-gray-dark`}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 800, damping: 30 }}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-offWhite dark:bg-gray-darkest"
      >
        <PiSun className={`size-5 ${!isDark ? "block" : "hidden"}`} />
        <PiMoon className={`size-5 ${isDark ? "block" : "hidden"}`} />
      </motion.div>
    </motion.button>
  );
}

export default ToggleTheme;

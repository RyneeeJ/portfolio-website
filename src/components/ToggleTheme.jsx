import { useEffect, useState } from "react";
import { PiMoon, PiSun } from "react-icons/pi";

function ToggleTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") document.querySelector("html").classList.add("dark");
    if (theme === "light")
      document.querySelector("html").classList.remove("dark");
  }, [theme]);
  const handleToggle = () =>
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={handleToggle}
      className={`flex w-14 cursor-pointer items-center rounded-full bg-gray-light p-1 dark:bg-gray-dark ${
        theme === "dark" ? "justify-end" : "justify-start"
      }`}
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-offWhite dark:bg-gray-darkest">
        <PiSun className={`size-5 ${theme === "light" ? "block" : "hidden"}`} />
        <PiMoon className={`size-5 ${theme === "dark" ? "block" : "hidden"}`} />
      </div>
    </button>
  );
}

export default ToggleTheme;

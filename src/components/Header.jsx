import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import ToggleTheme from "./ToggleTheme";

function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 mx-auto flex h-16 max-w-6xl items-center justify-between border-b border-gray-light px-3 sm:mb-12 md:h-20 dark:border-gray-dark dark:bg-gray-darkest">
      <Logo />

      <div className="hidden lg:block">
        <DesktopNav />
      </div>

      <div className="relative flex items-center gap-8">
        <ToggleTheme />
        <MobileNav />
      </div>
    </div>
  );
}

export default Header;

import Image from "next/image";
import Link from "next/link";
import HeaderNavlinks from "./header-navlinks/header-navlinks";
import { HeaderSheet } from "./header-sheet/header-sheet";
// import HeaderNavlinks from "./header-navlinks/header-navlinks";
// import { ThemeToggle } from "../theme/theme-toggle";
// import { HeaderSheet } from "./header-sheet/header-sheet";

const Header = () => {
  return (
    <header className="container py-2 flex justify-between items-center">
      <Link
        href="/"
        className="hover:opacity-50 transition-opacity duration-300"
      >
        <Image
          className="dark:invert"
          src={`/assets/images/vm-logo.svg`}
          alt="velomiko logo"
          width={120}
          height={84}
          priority={true}
        />
      </Link>
      <div className="hidden lg:flex gap-4">
        <HeaderNavlinks />
        {/* <ThemeToggle /> */}
      </div>
      <div className="block lg:hidden">
        <HeaderSheet />
      </div>
    </header>
  );
};

export default Header;

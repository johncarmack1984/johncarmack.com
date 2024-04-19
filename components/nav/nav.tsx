import Link from "next/link";

import ModeToggle from "@/components/theme-toggle";
import CodeIcon from "@/components/ui/icons/code";
import navLinks from "./links";
import NavMenu from "./menu";
import MobileNav from "./menu-mobile";

function HomeLink() {
  return (
    <Link
      aria-label="Back to Home"
      href={navLinks[0].href}
      className="hidden items-center mix-blend-difference md:block"
    >
      <CodeIcon className="h-6 w-6" />
      <h1 className="sr-only">John Carmack</h1>
    </Link>
  );
}

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between px-4 [backdrop-filter:saturate(120%)_blur(20px)] lg:px-6">
      <HomeLink />
      <NavMenu variant="top" />
      <MobileNav />
      <ModeToggle />
    </header>
  );
}

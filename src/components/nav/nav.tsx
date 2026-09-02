import ModeToggle from "@/components/theme-toggle";
import CodeIcon from "@/components/ui/icons/code";

import navLinks from "./links";
import NavMenu from "./menu";
import MobileNav from "./menu-mobile";

function HomeLink() {
  return (
    <a
      aria-label="Back to Home"
      href={navLinks[0].href}
      className="hidden items-center md:block"
    >
      <CodeIcon className="h-6 w-6" />
      <span className="sr-only">John Carmack</span>
    </a>
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

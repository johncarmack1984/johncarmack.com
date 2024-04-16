import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import ModeToggle from "@/components/theme-toggle";
import CodeIcon from "@/components/ui/icons/code-icon";

// prettier-ignore
const navLinks = [
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: <LinkedInLogoIcon />, href: "https://linkedin.com/in/johncarmack1984" },
  { label: <GitHubLogoIcon />, href: "https://github.com/johncarmack1984" },
];

function NavLink({ label, href }: { label: React.ReactNode; href: string }) {
  return (
    <Link
      key={href}
      href={href}
      className="text-sm font-medium underline-offset-4 transition transition-[text-decoration-line] hover:underline"
    >
      {label}
    </Link>
  );
}

export default function Topbar() {
  return (
    <header className="[background-filter] sticky top-0 flex h-14 w-full items-center px-4 [backdrop-filter:saturate(200%)_blur(3px)] lg:px-6">
      <Link className="flex items-center justify-center" href="/#hero">
        <CodeIcon className="h-6 w-6" />
        <span className="sr-only">John Carmack</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        {navLinks.map(NavLink)}
        <ModeToggle />
      </nav>
    </header>
  );
}

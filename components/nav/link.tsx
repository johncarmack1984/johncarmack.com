import Link from "next/link";

import { Button } from "../ui/button";

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <Button
      className="bg-background/15 -ml-3 px-3 text-base font-medium underline-offset-4 mix-blend-difference transition transition-[text-decoration-line] hover:underline md:ml-0  md:text-sm"
      variant="link"
      key={href}
      asChild
    >
      <Link aria-label={label} href={href} className="">
        {label}
      </Link>
    </Button>
  );
}

export default NavLink;

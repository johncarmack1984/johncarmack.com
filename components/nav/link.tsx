import Link from "next/link";

import { Button } from "../ui/button";

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <Button className="-ml-3 md:ml-0" variant="link" key={href} asChild>
      <Link
        aria-label={label}
        href={href}
        className="text-base font-medium underline-offset-4 transition transition-[text-decoration-line] hover:underline md:text-sm"
      >
        {label}
      </Link>
    </Button>
  );
}

export default NavLink;

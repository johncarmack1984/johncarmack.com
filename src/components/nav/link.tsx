import { Button } from "../ui/button";

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <Button
      className="-ml-3 px-3 font-medium text-base underline-offset-4 transition transition-[text-decoration-line] hover:underline md:ml-0 md:bg-background/15 md:text-sm"
      variant="link"
      key={href}
      asChild
    >
      <a aria-label={label} href={href}>
        {label}
      </a>
    </Button>
  );
}

export default NavLink;

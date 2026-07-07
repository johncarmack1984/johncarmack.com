import { cva, type VariantProps } from "class-variance-authority";

import NavLink from "./link";
import navLinks from "./links";

const navMenuVariants = cva("ml-auto flex items-center", {
  variants: {
    variant: {
      top: "mr-4 hidden items-center gap-1 md:flex",
      left: "flex-col items-start justify-start gap-2",
    },
  },
});

interface SiteNavProps extends VariantProps<typeof navMenuVariants> {}

function NavMenu({ variant }: SiteNavProps) {
  const slice = variant === "left" ? 0 : 1;
  return (
    <nav className={navMenuVariants({ variant })}>
      {navLinks.slice(slice).map(NavLink)}
    </nav>
  );
}

export default NavMenu;

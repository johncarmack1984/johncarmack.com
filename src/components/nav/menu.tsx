import { cva, VariantProps } from "class-variance-authority";

import NavLink from "./link";
import navLinks from "./links";

const navMenuVariants = cva("ml-auto flex items-center", {
  variants: {
    variant: {
      top: "hidden md:flex mr-4 items-center gap-1",
      left: "flex-col gap-2 justify-start items-start",
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

import { lazy, Suspense, useState } from "react";
import {
  Root as Sheet,
  Trigger as SheetTrigger,
} from "@radix-ui/react-dialog";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

// The sheet panel pulls in framer-motion; defer it until the menu is first
// opened so it stays out of the initial bundle. Root/Trigger come straight
// from radix so this file never imports the motion-flavored sheet module.
const MobileNavPanel = lazy(() => import("./menu-mobile-panel"));

function MobileNav() {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  return (
    <Sheet
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (value) setHasOpened(true);
      }}
    >
      <SheetTrigger className="md:hidden">
        <HamburgerMenuIcon />
        <span className="sr-only">Open Navigation</span>
      </SheetTrigger>
      {hasOpened && (
        <Suspense fallback={null}>
          <MobileNavPanel open={open} />
        </Suspense>
      )}
    </Sheet>
  );
}

export default MobileNav;

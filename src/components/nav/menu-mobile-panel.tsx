import { AnimatePresence, domAnimation, LazyMotion } from "framer-motion";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import NavMenu from "./menu";

function MobileNavPanel({ open }: { open: boolean }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence>
        {open && (
          <SheetContent side="left">
            <SheetHeader className="mb-4 items-start">
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>johncarmack.com</SheetDescription>
            </SheetHeader>
            <NavMenu variant="left" />
          </SheetContent>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MobileNavPanel;

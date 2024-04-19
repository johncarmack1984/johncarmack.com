"use client";

import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { AnimatePresence } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavMenu from "./menu";

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden">
        <HamburgerMenuIcon />
        <span className="sr-only">Open Navigation</span>
      </SheetTrigger>
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
    </Sheet>
  );
}

export default MobileNav;

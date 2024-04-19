"use client";

import { useState } from "react";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cva, VariantProps } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";

import ModeToggle from "@/components/theme-toggle";
import CodeIcon from "@/components/ui/icons/code";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

function HomeLink() {
  return (
    <Link
      aria-label="Back to Home"
      href={navLinks[0].href}
      className="hidden items-center md:block"
    >
      <CodeIcon className="h-6 w-6" />
      <h1 className="sr-only">John Carmack</h1>
    </Link>
  );
}

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

const navMenuVariants = cva("ml-auto flex items-center", {
  variants: {
    variant: {
      top: "hidden md:flex mr-4 items-center gap-0",
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

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="md:hidden">
        <HamburgerMenuIcon />
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

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-40 flex h-14 w-full items-center justify-between px-4 [backdrop-filter:saturate(120%)_blur(3px)] lg:px-6">
      <HomeLink />
      <NavMenu variant="top" />
      <MobileNav />
      <ModeToggle />
    </header>
  );
}

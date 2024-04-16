"use client";

import * as React from "react";
import useSunHidden from "@/hooks/useSunHidden";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const iconVariants = cva(["absolute", "size-[1.2rem]", "transition-all"], {
  variants: {
    hidden: {
      true: ["opacity-0", "-rotate-180"],
      false: ["opacity-100", "rotate-0"],
    },
  },
  defaultVariants: {
    hidden: true,
  },
});

export default function ModeToggle() {
  const { sunHidden, setTheme } = useSunHidden();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="" variant="outline" size="icon">
          <SunIcon className={cn(iconVariants({ hidden: sunHidden }))} />
          <MoonIcon className={cn(iconVariants({ hidden: !sunHidden }))} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

import { type ComponentProps, lazy, Suspense, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import useSunHidden from "@/hooks/useSunHidden";

const iconVariants = cva(
  ["absolute", "size-[1.2rem]", "transition-transform"],
  {
    variants: {
      hidden: {
        true: ["opacity-0", "-rotate-180"],
        false: ["opacity-100", "rotate-0"],
      },
    },
    defaultVariants: {
      hidden: true,
    },
  },
);

// The light/dark/system menu pulls in the Radix dropdown (~17KB gz). Defer it to
// a chunk loaded on first interaction, so it stays out of the initial bundle.
// hover/focus warms the chunk cache (without unmounting the interactive trigger,
// so a click is never lost); the click mounts the menu, which opens via defaultOpen.
const ThemeMenu = lazy(() => import("./theme-toggle-menu"));
const preloadMenu = () => {
  void import("./theme-toggle-menu");
};

function TriggerButton({
  sunHidden,
  ...props
}: { sunHidden: boolean } & ComponentProps<typeof Button>) {
  return (
    <Button
      className="bg-background/20"
      variant="outline"
      size="icon"
      {...props}
    >
      <SunIcon className={cn(iconVariants({ hidden: sunHidden }))} />
      <MoonIcon className={cn(iconVariants({ hidden: !sunHidden }))} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default function ModeToggle() {
  const { sunHidden } = useSunHidden();
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <TriggerButton
        sunHidden={sunHidden}
        onPointerEnter={preloadMenu}
        onFocus={preloadMenu}
        onClick={() => setOpen(true)}
      />
    );
  }

  return (
    <Suspense fallback={<TriggerButton sunHidden={sunHidden} />}>
      <ThemeMenu sunHidden={sunHidden} defaultOpen />
    </Suspense>
  );
}

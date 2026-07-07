import { cn } from "@/lib/utils";

export function Small({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <small className={cn("font-medium text-xs leading-none", className)}>
      {children}
    </small>
  );
}

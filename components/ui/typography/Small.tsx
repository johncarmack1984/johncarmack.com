import { cn } from "@/lib/utils";

export function Small({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <small className={cn("text-xs font-medium leading-none", className)}>
      {children}
    </small>
  );
}

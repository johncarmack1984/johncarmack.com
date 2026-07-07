import { cn } from "@/lib/utils";

export function Lead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn(className, "text-muted-foreground text-xl")}>{children}</p>
  );
}

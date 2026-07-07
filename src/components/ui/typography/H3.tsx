import { cn } from "@/lib/utils";

export function H3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        className,
        "scroll-m-20 font-semibold text-2xl tracking-tight",
      )}
    >
      {children}
    </h3>
  );
}

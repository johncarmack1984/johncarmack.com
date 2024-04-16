import { cn } from "@/lib/utils";

export function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        className,
        "scroll-m-20 font-serif text-4xl font-medium lg:text-5xl",
      )}
    >
      {children}
    </h1>
  );
}

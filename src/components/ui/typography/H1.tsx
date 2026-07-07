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
        "scroll-m-20 font-medium font-serif text-4xl lg:text-5xl",
      )}
    >
      {children}
    </h1>
  );
}

export function Muted({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-muted-foreground font-sans text-sm font-extrabold uppercase">
      {children}
    </p>
  );
}

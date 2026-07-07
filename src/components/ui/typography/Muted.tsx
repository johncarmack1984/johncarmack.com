export function Muted({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-extrabold font-sans text-muted-foreground text-sm uppercase">
      {children}
    </p>
  );
}

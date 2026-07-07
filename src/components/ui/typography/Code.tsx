export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm">
      {children}
    </code>
  );
}

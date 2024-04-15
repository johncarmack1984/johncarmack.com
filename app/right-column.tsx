export default function RightColumn() {
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 justify-between">
        <div className="bg-primary size-6 h-6 w-6 rounded-full" />
        <div className="bg-muted size-6 h-6 w-6 rounded-full" />
        <div className="bg-muted h-30 row-span-2 w-12 rounded-full" />
        <div className="bg-muted size-20 rounded-none" />
      </div>
    </>
  );
}

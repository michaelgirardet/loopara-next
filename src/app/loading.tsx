export default function Loading() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-rich">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-turquoise" />
    </div>
  );
}

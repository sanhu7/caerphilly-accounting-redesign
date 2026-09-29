export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-4">This page is coming soon.</p>
    </div>
  );
}
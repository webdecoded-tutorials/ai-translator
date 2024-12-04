export default function Layout({ children }) {
  return (
    <main className="min-h-screen bg-gray-100 py-8 max-w-screen-xl">
      <div className="container mx-auto px-4">{children}</div>
    </main>
  );
}

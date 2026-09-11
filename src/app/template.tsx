export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="overflow-x-hidden">
      {children}
    </main>
  );
}

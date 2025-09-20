import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold text-white">Zero Gravity Dashboard</h1>
      <p className="mt-2 text-slate-300">Explore cosmic metrics and visualizations.</p>
      <div className="mt-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-white hover:bg-cyan-400"
        >
          Go to Dashboard →
        </Link>
      </div>
    </main>
  );
}

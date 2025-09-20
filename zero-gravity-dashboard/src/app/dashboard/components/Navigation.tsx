import Link from "next/link";

export function Navigation() {
  return (
    <nav className="mb-6 flex items-center justify-between">
      <div className="text-lg font-semibold text-white">Zero Gravity</div>
      <div className="space-x-4 text-slate-300">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}



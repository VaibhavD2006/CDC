import { ReactNode } from "react";

export function DataCard({ title, value, icon }: { title: string; value: ReactNode; icon?: ReactNode }) {
  return (
    <div className="rounded-xl bg-white/5 p-4 shadow-sm ring-1 ring-white/10 backdrop-blur">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-300">{title}</p>
          <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
        </div>
        {icon}
      </div>
    </div>
  );
}



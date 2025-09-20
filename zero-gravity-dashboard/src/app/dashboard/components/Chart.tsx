"use client";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

type Point = { name: string; value: number };

export function Chart({ data }: { data: Point[] }) {
  return (
    <div className="rounded-xl bg-white/5 p-4 shadow-sm ring-1 ring-white/10 backdrop-blur">
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #1e293b" }} />
            <Line type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}



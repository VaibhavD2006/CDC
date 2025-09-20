import { ZeroGravityBackground } from "./components/ZeroGravityBackground";
import { Navigation } from "./components/Navigation";
import { DataCard } from "./components/DataCard";
import { Chart } from "./components/Chart";

const sampleData = Array.from({ length: 12 }, (_, i) => ({ name: `M${i + 1}`, value: Math.round(Math.random() * 100) }));

export default function DashboardPage() {
  return (
    <main className="relative mx-auto max-w-6xl p-6">
      <ZeroGravityBackground />
      <Navigation />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DataCard title="Oxygen Levels" value="78%" />
        <DataCard title="Power" value="62%" />
        <DataCard title="Velocity" value="7.8 km/s" />
        <DataCard title="Altitude" value="410 km" />
      </div>
      <div className="mt-6">
        <Chart data={sampleData} />
      </div>
    </main>
  );
}



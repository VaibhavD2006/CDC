## Build Plan – Zero Gravity Dashboard

### Phase 1 – Setup & Boilerplate

#### Initialize Next.js App

```bash
npx create-next-app@latest zero-gravity-dashboard --typescript --tailwind --eslint
```

- Choose App Router.
- Confirm TypeScript and Tailwind setup.

#### Install Dependencies

```bash
cd zero-gravity-dashboard
npm install framer-motion @tanstack/react-query recharts
```

- framer-motion → animations
- @tanstack/react-query → data fetching/caching
- recharts → charts

#### File Cleanup

- Remove boilerplate from `src/app/page.tsx`.
- Create base dirs: `components`, `hooks`, `lib`, `types`, `styles`.

### Phase 2 – Backend (Python API)

Simple API to serve the dataset (FastAPI).

```bash
mkdir backend && cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install fastapi uvicorn pandas
pip freeze > requirements.txt
```

Backend structure:

```text
backend/
├── main.py
├── requirements.txt
└── data/
    └── sample_data.json
```

`backend/main.py`:

```python
from fastapi import FastAPI
import json

app = FastAPI()

@app.get("/data")
def get_data():
    with open("data/sample_data.json") as f:
        return json.load(f)
```

Run API:

```bash
uvicorn main:app --reload --port 8000
```

### Phase 3 – API Integration in Next.js

#### Create API utility – `src/lib/api.ts`

```ts
export async function fetchData() {
  const res = await fetch("http://127.0.0.1:8000/data");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
```

#### Create hook – `src/hooks/useFetchData.ts`

```ts
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/api";

export function useFetchData() {
  return useQuery({
    queryKey: ["dashboard-data"],
    queryFn: fetchData,
  });
}
```

#### Provide React Query in App Router

Add `src/app/providers.tsx` (client component):

```tsx
"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
```

Wrap in `src/app/layout.tsx`:

```tsx
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

### Phase 4 – UI & Dashboard Layout

#### Global Theme

- Colors: `#0f172a` (space black), `#38bdf8` (neon blue), `#f472b6` (cosmic pink), `#e879f9` (nebula purple)
- Background: gradient with starfield overlay

#### Core Components

- `Navigation.tsx` → navbar/sidebar with links
- `DataCard.tsx` → floating stat cards
- `Chart.tsx` → line/bar/pie visualizations
- `ZeroGravityBackground.tsx` → stars + floating astronaut
- `Loader.tsx` → animated spinner

#### Dashboard Page Layout

- Grid layout with cards on top, charts in middle, summary at bottom
- Smooth transitions when switching datasets

### Phase 5 – Animations & Theme

#### Framer Motion

```tsx
<motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
  <DataCard title="Oxygen Levels" value="78%" />
</motion.div>
```

#### Zero Gravity Background

- Canvas/particles for stars, or SVG motion paths

### Phase 6 – Testing & Iteration

- Test API integration (mock missing data with JSON)
- Test responsiveness (desktop, tablet, mobile)
- Fix performance bottlenecks (lazy load charts)

### Phase 7 – Deployment

#### Frontend

- Deploy with Vercel (Next.js hosting)
```bash
vercel
```

#### Backend

- Deploy with Render / Railway / Heroku (FastAPI free tier)
- Update `src/lib/api.ts` with live backend URL
## Zero Gravity Dashboard — Project Structure

```text
zero-gravity-dashboard/
│── package.json
│── tsconfig.json
│── next.config.mjs
│── postcss.config.js
│── tailwind.config.js
│── README.md
│── PROJECT_STRUCTURE.md # (this file)
│── .eslintrc.json
│── .gitignore
│
├── public/ # Static assets (images, icons, etc.)
│ ├── favicon.ico
│ ├── zero-gravity-bg.png
│ ├── astronaut.svg
│ └── logo.svg
│
├── src/
│ ├── app/ # Next.js App Router
│ │ ├── layout.tsx # Root layout
│ │ ├── providers.tsx # Client providers (React Query, etc.)
│ │ ├── page.tsx # Landing page
│ │ └── dashboard/
│ │   ├── page.tsx # Dashboard page
│ │   └── components/
│ │     ├── Chart.tsx
│ │     ├── DataCard.tsx
│ │     ├── Navigation.tsx
│ │     ├── ZeroGravityBackground.tsx
│ │     └── Loader.tsx
│ │
│ ├── lib/ # Utility functions
│ │ ├── api.ts # Fetch data from Python backend
│ │ └── helpers.ts
│ │
│ ├── styles/ # Global styles
│ │ ├── globals.css
│ │ └── animations.css
│ │
│ ├── types/ # TypeScript type definitions
│ │ ├── data.ts
│ │ └── index.ts
│ │
│ └── hooks/ # Custom React hooks
│   ├── useFetchData.ts
│   └── useTheme.ts
│
├── backend/ # Python backend
│ ├── main.py # FastAPI/Flask server
│ ├── requirements.txt
│ └── data/ # Your dataset(s)
│   └── sample_data.json
│
└── docs/ # Documentation & hackathon notes
  ├── wireframes.png
  ├── theme.md
  └── api-contract.md
```

## Notes

- **Frontend**:
  - Next.js App Router with TypeScript.
  - Tailwind for styling + Framer Motion for animations.
  - Components like `DataCard` and `Chart` make the dashboard modular.

- **Backend (Python)**:
  - Lightweight API (FastAPI or Flask) that serves JSON data.
  - Data stored in `/backend/data/`.

- **Theme**:
  - “Zero Gravity” look → cosmic backgrounds, floating animations, smooth transitions.
  - Astronauts, stars, and nebula elements in `public/`.

- **Docs**:
  - `api-contract.md` defines how frontend consumes backend data.
  - `theme.md` explains color palette and design inspirations.

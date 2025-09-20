from fastapi import FastAPI
import json
from pathlib import Path
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow local Next.js dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_PATH = Path(__file__).parent / "data" / "sample_data.json"

@app.get("/data")
def get_data():
    if not DATA_PATH.exists():
        return {"metrics": [], "series": []}
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

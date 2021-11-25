from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
#source ./venv/bin/activate && uvicorn main:app --reload
#Response Model
#skiped: CORS

class Message(BaseModel):
    sender: str
    content: str


app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def get_all():
    return "All data that we have stored"


@app.post("/")
async def insert(data: Message):
    return {**data.dict()}

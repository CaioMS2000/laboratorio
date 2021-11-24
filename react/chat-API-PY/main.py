from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel
#source ./venv/bin/activate && uvicorn main:app --reload
#Response Model
#skiped: CORS

class Message(BaseModel):
    sender: str
    content: str


app = FastAPI()

@app.get("/")
async def get_all():
    return "All data that we have stored"


@app.post("/")
async def insert(data: Message):
    return {**data.dict()}

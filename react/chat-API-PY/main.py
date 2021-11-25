from fastapi import FastAPI
from typing import Optional
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import sql_app.schemas as schema
from sql_app.database import SessionLocal, engine
import sql_app.models as model

# from sql_app.models import Base

#source ./venv/bin/activate && uvicorn main:app --reload
#Response Model
#skiped: CORS


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

# sql_app.models.Base.metadata.create_all(bind=engine)
# model.Base.metadata.create_all(bind=engine)

def get_database_session():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


@app.get("/")
async def get_all():
    return "All data that we have stored"


# @app.post("/")
# async def insert(data: Message):
#     return {**data.dict()}

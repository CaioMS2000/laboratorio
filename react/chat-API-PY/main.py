from fastapi import Depends, FastAPI, HTTPException
from typing import Optional, List
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import sql_app.crud as crud
import sql_app.schemas as schema
import sql_app.models as model
# from sql_app.database import SessionLocal, engine
from sql_app.mixed import SessionLocal, engine

# from sql_app.models import Base

#source ./venv/bin/activate && uvicorn main:app --reload
#Response Model
#skiped: CORS

model.Base.metadata.create_all(bind=engine)

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

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/users/", response_model=schema.User)
def create_user(user: schema.UserCreate, db: Session = Depends(get_db)):
    print("\ncomeçou a inserir\n")
    db_user = crud.get_user_by_nick(db, nick=user.nick)
    if db_user:
        raise HTTPException(status_code=400, detail="Nick already registered")
    return crud.create_user(db=db, user=user)


@app.get("/users/", response_model=List[schema.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.get("/users/{user_id}", response_model=schema.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


@app.post("/users/{user_id}/messages/", response_model=schema.Message)
def create_message_for_user(
    user_id: int, message: schema.MessageCreate, db: Session = Depends(get_db)
):
    return crud.create_user_message(db=db, message=message, user_id=user_id)


@app.get("/messages/", response_model=List[schema.Message])
def read_messages(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    messages = crud.get_messages(db, skip=skip, limit=limit)
    return messages
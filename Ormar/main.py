from fastapi import FastAPI, Depends
from typing import Optional

from sql.database import database, metadata
import sql.models as model
import sql.database as database

# ./venv/Scripts/activate && uvicorn main:app --reload
# source ./venv/bin/activate && uvicorn main:app --reload

app = FastAPI()
app.state.database = database.database
metadata.create_all(database.engine)


@app.on_event("startup")
async def startup() -> None:
    database_ = app.state.database
    if not database_.is_connected:
        await database_.connect()


@app.on_event("shutdown")
async def shutdown() -> None:
    database_ = app.state.database
    if database_.is_connected:
        await database_.disconnect()

# @app.post("/users/")
# async def create_user(user: model.User):
#     return await user.save()

@app.get("/users/")
async def get_users():
    return await model.User.objects.all()

@app.post("/users/")
async def create_user():
    return await model.User.objects.create(name="Caio")

@app.post("/objects/")
async def create_object():
    user: Optional[model.User] = await model.User.objects.first()
    return await model.Something.objects.create(user=user, name="alguma coisa qualquer")
from fastapi import FastAPI
import enum
from typing import Optional
from pydantic import BaseModel
#source ./venv/bin/activate && uvicorn main:app --reload
#Query Parameters and String Validations

class Product(BaseModel):
    id: int
    name: Optional[str] = None


class ModelName(str, enum.Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"



app = FastAPI()
# print(type(app))

@app.get("/")
async def root():
    return "All data that we have stored"
    # return {"message": "Hello World"}


# @app.get("/items/{it_id}")
# async def get_iten_by_id(it_id: int):
#     return {"The product\'s id you want is ": f"{it_id} : {type(it_id)}"}


@app.get("/items/{item_id}")
async def read_item(item_id: str, q: Optional[str] = None, short: bool = False):
    item = {"item_id": item_id}
    if q:
        item.update({"q": q})
    if not short:
        item.update(
            {"description": "This is an amazing item that has a long description"}
        )
    return item


@app.get("/items/")
async def get_itens(page: int, limit: int):
    return {"page numer":page, "items per page": limit}


@app.post("/items/", response_model = Product)
async def create_product(product: Product):
    return {"product": product}
 

@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    print(f'impressão da função: {model_name} && {model_name.value}')

    if model_name == ModelName.alexnet:
        return {"model_name": model_name, "message": "Deep Learning FTW!"}

    if model_name.value == "lenet":
        return {"model_name": model_name, "message": "LeCNN all the images"}

    if(model_name == model_name.value):
        print("sim, eles são iguais")

    return {"model_name": model_name, "message": "Have some residuals"}


@app.get("/files/{path:path}")
async def get_file(path:str):
    return {"file_path": path}

"""
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
"""
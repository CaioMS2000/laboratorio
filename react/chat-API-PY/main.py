from fastapi import FastAPI
import enum
from typing import Optional
from pydantic import BaseModel
#source ./venv/bin/activate && uvicorn main:app --reload

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
    return {"message": "Hello World"}

@app.get("/items/{it_id}")
async def get_iten_by_id(it_id: int):
    return {"The product\'s id you want is ": f"{it_id} : {type(it_id)}"}


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
import pydantic
from datetime import datetime

#class (pydantic.BaseModel)

class UserBase(pydantic.BaseModel):
    email: str


class UserCreate(UserBase):
    hashed_password: str
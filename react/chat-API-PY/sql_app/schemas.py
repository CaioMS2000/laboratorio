from datetime import date
from pydantic import BaseModel

class User(BaseModel):
    id = int
    nickname = str
    nick_color = str
    num_msg = int
    reg_date = date

    class Config:
        orm_mode = True
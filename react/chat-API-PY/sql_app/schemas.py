from datetime import date
from pydantic import BaseModel
from typing import List, Optional

class MessageBase(BaseModel):
    id: int = 0
    sent_date: date
    num_char: int
    deleted: bool


class MessageCreate(MessageBase):    
    owner_id: int 
    content: str


class Message(BaseModel):

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    id: int = 0
    nick_color: str = "#000000"
    num_msg: int = 0
    reg_date: date = "2021-11-11"


class UserCreate(UserBase):
    password: str
    nickname: str


class User(UserBase):
    messages: List[Message] = []    

    class Config:
        orm_mode = True


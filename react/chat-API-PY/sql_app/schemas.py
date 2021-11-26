from datetime import date
from pydantic import BaseModel
from typing import List, Optional

class MessageBase(BaseModel):
    id: int
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
    id: int
    nick_color: str
    num_msg: int
    reg_date: date


class UserCreate(UserBase):
    password: str
    nickname: str


class User(UserBase):
    messages: List[Message] = []    

    class Config:
        orm_mode = True


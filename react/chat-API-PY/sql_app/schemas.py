from datetime import date, datetime
from pydantic import BaseModel
from typing import List, Optional

"""
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
"""

class Message(BaseModel):
    id: int = 0
    sent_date: datetime = "2021-11-11 12:45:13:1000"
    num_char: int = 0
    deleted: bool = False
    owner_id: int 
    content: str

    class Config:
        orm_mode = True


class User(BaseModel):
    password: str
    nickname: str
    id: int = 0
    nick_color: str = "#000000"
    num_msg: int = 0
    reg_date: datetime = "2021-11-11 12:45:13:1000"
    messages: List[Message] = []    

    class Config:
        orm_mode = True

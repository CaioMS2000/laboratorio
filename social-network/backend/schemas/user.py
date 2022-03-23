from datetime import datetime

from ._metaclasses import _BASECLASS, _CREATIONCLASS

class UserBase(_BASECLASS):
    email: str
    full_name: str
    username: str
    profile_picture: str


class UserCreate(UserBase, _CREATIONCLASS):
    hashed_password: str


class User(UserBase, _CREATIONCLASS):
    id: int
    created_at: datetime
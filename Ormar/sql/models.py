import ormar
from typing import Optional, Union
from datetime import datetime

from .database import database, metadata

class MetaMeta(ormar.ModelMeta):
    database = database
    metadata = metadata


class User(ormar.Model):
    class Meta(MetaMeta):
        pass

    class Config:
        orm_mode = True

    id: int = ormar.Integer(primary_key=True)
    name: str = ormar.String(max_length=100)
    reg_date: datetime = ormar.DateTime(default=datetime.now)

    @ormar.property_field
    def num_char_of_name(self):
        return len(self.name)


class Something(ormar.Model):
    class Meta(MetaMeta):
        pass

    class Config:
        orm_mode = True
    
    id: int = ormar.Integer(primary_key=True)
    name: str = ormar.String(max_length=256)
    user = ormar.ForeignKey(User)
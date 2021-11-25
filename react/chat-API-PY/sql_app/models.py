from sqlalchemy.schema import Column
from sqlalchemy.types import String, Integer, Text, Date
from .database import Base

class User(Base):
    __tablename__ = "User"
    id = Column(Integer, primary_key=True, index=True)
    nickname = Column(String(100), unique=True)
    nick_color = Column(String(7))
    num_msg = Column(Integer)
    reg_date = Column(Date)
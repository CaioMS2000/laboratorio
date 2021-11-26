from sqlalchemy.schema import Column
from sqlalchemy.types import String, Integer, Text, Date, Boolean
from sqlalchemy.orm import relationship
# from .database import Base
from .mixed import Base

class User(Base):
    __tablename__ = "User"
    id = Column(Integer, primary_key=True, index=True)
    nickname = Column(String(100), unique=True)
    nick_color = Column(String(7))
    num_msg = Column(Integer)
    reg_date = Column(Date)
    password = Column(String(100), unique=True)

    messages = relationship("Message", back_populates="owner")

class Message(Base):
    __tablename__ = "Message"
    id = Column(Integer, primary_key=True, index=True)
    content = Column(String(500), unique=True)
    num_char = Column(Integer)
    sent_date = Column(Date)
    deleted = Column(Boolean)

    owner = relationship("User", back_populates="messages")
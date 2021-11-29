from sqlalchemy.schema import Column, Sequence, ForeignKey
from sqlalchemy.types import String, Integer, Text, Date, Boolean
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "user"
    id = Column(Integer, Sequence('id', start=1, increment=1), primary_key=True, index=True)
    nickname = Column(String(100), unique=True)
    nick_color = Column(String(7))
    num_msg = Column(Integer)
    reg_date = Column(Date)
    password = Column(String(100), unique=True)

    # messages = relationship("Message", back_populates = "owner")
    # messages = relationship("Message", back_populates="owner")

class Message(Base):
    __tablename__ = "message"
    id = Column(Integer, Sequence('id', start=1, increment=1), primary_key=True, index=True)
    content = Column(String(500), unique=True)
    num_char = Column(Integer)
    sent_date = Column(Date)
    deleted = Column(Boolean)

    owner_id = Column(Integer, ForeignKey('parent.id'))
    owner = relationship("User", back_populates="messages")
    # owner = relationship("User", back_populates="messages")
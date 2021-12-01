from sqlalchemy.schema import Column, Sequence, ForeignKey
from sqlalchemy.types import Integer, String, Date, DateTime, Boolean
from sqlalchemy.orm import relationship
from datetime import  datetime
from .database import Base

class User(Base):
    __tablename__ = "user"
    id = Column(Integer, Sequence('id', start=1, increment=1), primary_key=True, index=True)
    nickname = Column(String(100), unique=True)
    password = Column(String(100), unique=True)
    nick_color = Column(String(7), default = "#000000")
    reg_date = Column(DateTime, default = datetime.now())
    num_msg = Column(Integer, default = 0)
    # messages = relationship("Message", backref = "user")
    messages = relationship("Message", back_populates = "owner")


class Message(Base):
    __tablename__ = "message"
    id = Column(Integer, Sequence('id', start=1, increment=1), primary_key=True, index=True)
    content = Column(String(500), unique=True)
    num_char = Column(Integer, default = 0)
    sent_date = Column(DateTime, default = datetime.now())
    deleted = Column(Boolean, default = False)
    owner_id = Column(Integer, ForeignKey('user.id'))
    # owner = relationship("User")
    owner = relationship("User", back_populates = "messages")
    # __mapper_args__ = {'inherit_condition': (owner_id == User.id)}
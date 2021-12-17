from typing import List
from sqlalchemy import create_engine, Column, Integer, String, Date, DateTime, Sequence, Boolean, ForeignKey
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy.ext.declarative import declarative_base
import mysql.connector
from datetime import datetime

config = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'password': 'passwd1234',
    'database': 'chat_API'
}

db_user = config.get('user')
db_pwd = config.get('password')
db_host = config.get('host')
db_port = config.get('port')
db_name = config.get('database')

connection_str = f'mysql+pymysql://{db_user}:{db_pwd}@{db_host}:{db_port}/{db_name}'

engine = create_engine(connection_str, echo = True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
session = SessionLocal()
Base = declarative_base()

class User(Base):
    __tablename__ = "user"
    id = Column(Integer, Sequence('id', start=1, increment=1), primary_key=True, index=True)
    nickname = Column(String(100), unique=True)
    # password = Column(String(100), unique=True)
    password = Column(String(100))
    nick_color = Column(String(7), default = "#000000")
    reg_date = Column(DateTime, default = datetime.now())
    num_msg = Column(Integer, default = 0)
    # messages = relationship("Message", backref = "user")
    messages = relationship("Message", back_populates = "owner")


class Message(Base):
    __tablename__ = "message"
    id = Column(Integer, Sequence('id', start=1, increment=1), primary_key=True, index=True)
    content = Column(String(500))
    num_char = Column(Integer, default = 0)
    sent_date = Column(DateTime, default = datetime.now())
    deleted = Column(Boolean, default = False)
    owner_id = Column(Integer, ForeignKey('user.id'))
    # owner = relationship("User")
    owner = relationship("User", back_populates = "messages")
    # __mapper_args__ = {'inherit_condition': (owner_id == User.id)}

u1 = User(nickname = "98dq", password = "fghdrfh")
u2 = User(nickname = "aerwef2", password = "d4g65s")
m1 = Message(content = "094wr0294jcku489349th34ht34h9ct43ct34k9", owner = u1)
m2 = Message(content = "f1d315515y", owner = u1)
m3 = Message(content = "55551", owner = u2)
Base.metadata.create_all(engine)

session.add(u1)
session.add(u2)
session.add(m1)
session.add(m2)
session.add(m3)
session.commit()
session.refresh(u1)
session.refresh(u2)
session.refresh(m1)
session.refresh(m2)
session.refresh(m3)
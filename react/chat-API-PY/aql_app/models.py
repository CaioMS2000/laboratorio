from sqlalchemy.schema import Column
from sqlalchemy.types import String, Integer, Text
from database import Base
class Movie(Base):
    __tablename__ = "Movie"
    id = Column(Integer, primary_key=True, index=True)
    nickname = Column(String(100), unique=True)
    nick_color = Column(String(7))
    num_msg = Column(Integer)
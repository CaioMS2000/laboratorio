from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="passwd1234"
)

DATABASE_URL = "mysql+mysqlconnector://root@localhost:3306/chat_API"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
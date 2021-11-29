from sqlalchemy.orm import Session
from . import models, schemas

"""
#getters
def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_nick(db: Session, nick: str):
    return db.query(models.User).filter(models.User.nick == nick).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def get_messages(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Message).offset(skip).limit(limit).all()


#creators
def create_user(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(nick=user.nickname, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def create_user_message(db: Session, message: schemas.MessageCreate, user_id: int):
    db_message = models.Message(**message.dict(), owner_id=user_id)
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message
"""
def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_nick(db: Session, nick: str):
    return db.query(models.User).filter(models.User.nick == nick).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def get_messages(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Message).offset(skip).limit(limit).all()


#creators
def create_user(db: Session, user: schemas.User):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(nickname=user.nickname, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def create_user_message(db: Session, message: schemas.Message, user_id: int):
    db_message = models.Message(**message.dict(), owner_id=user_id)
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message
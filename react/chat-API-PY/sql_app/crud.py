from sqlalchemy.orm import Session
from . import models, schemas

# print('', flush = True)
#getters
def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_nick(db: Session, nick: str):
    var = db.query(models.User).filter(models.User.nickname == nick).first()
    print(var, flush = True)
    return var


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def get_messages(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Message).offset(skip).limit(limit).all()


#creators
def create_user(db: Session, user: schemas.User):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(nickname=user.nickname, password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def create_user_message(message: schemas.Message, db: Session):
    db_message = models.Message(**message.dict())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message
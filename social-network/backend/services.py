import database
import sqlalchemy.orm
import jwt

JWT_SECRET = "secret code"

def create_database():
    return database.Base.metadata.create_all(bind=database.engine)

def get_database():
    db = database.SessionLocal()

    try:
        return db
    finally:
        db.close()

async def authenticate_user(db: sqlalchemy.orm.Session):
    pass

async def create_token():
    token = jwt.encode({}, JWT_SECRET)

    return dict(access_token=token, token_type="bearer")
import database
import sqlalchemy.orm

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
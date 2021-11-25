import './sql_app/schemas'
from './sql_app/database' import SessionLocal, engine
import './sql_app/models'

model.Base.metadata.create_all(bind=engine)
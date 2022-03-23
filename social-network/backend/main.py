# uvicorn main:app --reload
import fastapi
import fastapi.security
import sqlalchemy.orm
from datetime import datetime

import services
import models
import schemas

services.create_database()
app = fastapi.FastAPI()

@app.post("/api/token")
async def generate_token(form_data: fastapi.security.OAuth2PasswordRequestForm = fastapi.Depends(), db: sqlalchemy.orm.Session = fastapi.Depends(services.get_database)):
    user = dict(username=form_data.username, password=form_data.password)
    valid = True

    if not valid:
        raise fastapi.HTTPException(status_code=401, detail="Invalid Credentials")
    
    return await services.create_token()

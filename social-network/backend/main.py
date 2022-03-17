import fastapi
import fastapi.security
import sqlalchemy.orm

import services

services.create_database()
app = fastapi.FastAPI()

@app.post("/api/token")
async def generate_token(form_data: fastapi.security.OAuth2PasswordRequestForm = fastapi.Depends(), db: sqlalchemy.orm.Session = fastapi.Depends(services.get_database)):
    pass
# app/main.py
from fastapi import FastAPI
from app.api.routes_secrets import router as secrets_router

app = FastAPI(
    title="SecretLink API",
    version="1.0.0",
    description="API para ocultar y revelar mensajes usando Redis",
)

# Registrar las rutas
app.include_router(secrets_router, prefix="/api")

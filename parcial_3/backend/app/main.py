from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.api.routes_secrets import router as secrets_router

app = FastAPI(
    title="SecretLink API",
    version="1.0.0",
    description="API para ocultar y revelar mensajes usando Redis",
)

# Configuración de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # o ["http://localhost:5173"] si quieres ser más estricto
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#  Registrar las rutas
app.include_router(secrets_router, prefix="/api", tags=["Secrets"])

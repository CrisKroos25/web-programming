# app/models/secret_model.py
from pydantic import BaseModel

class SecretRequest(BaseModel):
    """
    Modelo de entrada.
    Representa el JSON que el cliente envía para ocultar un mensaje.
    """
    message: str


class SecretResponse(BaseModel):
    """
    Modelo de salida.
    Representa la respuesta que la API devuelve al ocultar un mensaje.
    """
    key: str

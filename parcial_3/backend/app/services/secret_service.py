# app/services/secret_service.py
import redis
from app.core.config import get_redis_client
from app.utils.helpers import generate_unique_key


def save_secret(message: str) -> str:
    """
    Guarda un mensaje en Redis y devuelve la key generada.
    """
    r = get_redis_client()
    key = generate_unique_key()

    # Guardar el mensaje en Redis (sin expiración, pero podrías agregar TTL)
    r.set(key, message)

    return key


def reveal_secret(key: str) -> str | None:
    """
    Obtiene el mensaje y lo elimina de Redis inmediatamente después.
    Retorna None si la key no existe.
    """
    r = get_redis_client()
    message = r.get(key)

    if message:
        r.delete(key)
        return message.decode("utf-8")  # Redis devuelve bytes

    return None

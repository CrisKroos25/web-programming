# app/services/secret_service.py
from app.core.config import get_redis_client
from app.utils.helpers import generate_unique_key

def save_secret(message: str) -> str:
    r = get_redis_client()
    key = generate_unique_key()
    r.set(key, message)
    return key

def reveal_secret(key: str) -> str | None:
    r = get_redis_client()
    message = r.get(key)
    if message:
        r.delete(key)
        return message.decode("utf-8")
    return None

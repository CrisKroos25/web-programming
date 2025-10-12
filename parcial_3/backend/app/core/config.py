# app/core/config.py
import os
import redis
from dotenv import load_dotenv

load_dotenv()

REDIS_HOST = os.getenv("REDIS_HOST", "localhost")
REDIS_PORT = int(os.getenv("REDIS_PORT", 6379))
REDIS_DB = int(os.getenv("REDIS_DB", 0))

def get_redis_client():
    """
    Devuelve una instancia del cliente Redis configurada.
    """
    return redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=REDIS_DB)

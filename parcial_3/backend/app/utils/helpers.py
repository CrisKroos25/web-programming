# app/utils/helpers.py
import secrets

def generate_unique_key() -> str:
    """
    Genera una key aleatoria segura (ejemplo: '8f3a7bcd2e7f0a21').
    """
    return secrets.token_hex(8)  # 16 caracteres hexadecimales

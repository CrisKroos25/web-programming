from fastapi import APIRouter, HTTPException
from app.models.secret_model import SecretRequest, SecretResponse
from app.services.secret_service import save_secret, reveal_secret

router = APIRouter(tags=["Secrets"]) 


@router.post("/hide", response_model=SecretResponse)
def hide_secret(secret: SecretRequest):
    """
    Endpoint para ocultar un mensaje en Redis.
    """
    key = save_secret(secret.message)
    return {"key": key}


@router.get("/reveal/{key}")
def reveal_secret_by_key(key: str):
    """
    Endpoint para revelar un mensaje en Redis.
    """
    message = reveal_secret(key)

    if not message:
        raise HTTPException(
            status_code=404,
            detail="La clave no existe o ya fue utilizada."
        )

    return {"message": message}

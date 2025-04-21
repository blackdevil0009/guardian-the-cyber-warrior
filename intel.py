from fastapi import APIRouter
from pymongo import MongoClient
import os

router = APIRouter()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
mongo_client = MongoClient(MONGO_URI)
mongo_db = mongo_client.guardian_db
intel_collection = mongo_db.darkweb_intel

@router.post("/store")
def store_darkweb_intel(data: dict):
    intel_collection.insert_one(data)
    return {"status": "stored", "data": data}

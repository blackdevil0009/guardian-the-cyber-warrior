from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from auth import router as auth_router
from rdf import router as rdf_router
from intel import router as intel_router
from scan import router as scan_router

app = FastAPI(title="GUARDIAN: The Cyber Warrior")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth")
app.include_router(rdf_router, prefix="/rdf")
app.include_router(intel_router, prefix="/intel")
app.include_router(scan_router)


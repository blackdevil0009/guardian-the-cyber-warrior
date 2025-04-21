from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# Load DATABASE_URL from environment variables
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:password@localhost/guardian")

# Create engine for SQLAlchemy
engine = create_engine(DATABASE_URL, echo=True)

# Create a sessionmaker that will create new sessions when needed
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create a base class for declarative models
Base = declarative_base()

def get_db():
    """ Dependency for database session """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

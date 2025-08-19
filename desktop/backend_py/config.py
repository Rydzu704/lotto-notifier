import os
from dotenv import load_dotenv

dotenv_path = os.path.join(os.path.dirname(__file__), "../../backend/.env")
load_dotenv(dotenv_path)

DB_HOST = os.getenv("DB_HOST")
DB_USER = os.getenv("DB_USER")
DB_PASS = os.getenv("DB_PASS")
DB_NAME = os.getenv("DB_NAME")
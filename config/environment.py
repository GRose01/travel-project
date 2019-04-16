import os

db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/itchyfeet')
secret = os.getenv('SECRET', 'I really like Nickelback')

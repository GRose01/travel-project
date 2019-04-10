from app import db, ma, bcrypt
from .base import BaseModel
from config.environment import secret
import jwt
from datetime import datetime, timedelta
from sqlalchemy.ext.hybrid import hybrid_property




class User(db.Model, BaseModel):

    __tablename__ = 'user_table'

    username = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(28), nullable=False, unique=True)
    password_hash = db.Column(db.String(128))

    @hybrid_property
    def password(self):
        pass

    @password.setter
    def password(self, plaintext):
        self.password_hash = bcrypt.generate_password_hash(plaintext).decode('utf-8')

    def validate_password(self, plaintext):
        return bcrypt.check_password_hash(self.password_hash, plaintext)

    def generate_token(self):
        payload = {
        'exp': datetime.utcnow() + timedelta(days=1),
        'iat': datetime.utcnow(),
        'sub': self.id
        }

        token = jwt.encode(
            payload,
            secret,
            'HS256'
        ).decode('utf-8')

        return token

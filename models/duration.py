from marshmallow import fields
from app import db, ma
from .base import BaseModel

class Duration(db.Model, BaseModel):
    __tablename__ = 'duration_table'

    duration = db.Column(db.String(40), unique=True, nullable=False)

class DurationSchema(ma.ModelSchema):
    trips = fields.Nested('TripSchema', many=True, only=('name',))

    class Meta:
        model = Duration

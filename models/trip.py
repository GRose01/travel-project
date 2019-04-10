from app import db, ma
from marshmallow import fields
from .base import BaseModel

class Trip(db.Model, BaseModel):

    __tablename__ = 'trips'

    name = db.Column(db.String(50), nullable=False)
    images = db.Column(db.String(128))
    description = db.Column(db.String(128), nullable=False)
    budget = db.Column(db.Number, nullable=False)
    number_of_days = db.Column(db.Number, nullable=False)
    time_of_year = db.Column(db.String(20), nullable=False)
    categories = db.relationship('Category', backref='trips') # does this need a secondary table?
    # add in creator/creator_id - linked to User

class TripSchema(ma.ModelSchema):
    categories = fields.Nested('CategorySchema', many=True)

    class Meta:
        model = Trip

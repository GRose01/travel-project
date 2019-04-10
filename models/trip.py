from app import db, ma
from marshmallow import fields
from .base import BaseModel
from .category import Category
from .user import User

likes = db.Table(
    'likes',
    db.Column('trip_id', db.Integer, db.ForeignKey('trips_table.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('user_table.id'))
)

# create many to many trips-category table
trips_categories = db.Table('trips_categories',
    db.Column('trip_id', db.Integer, db.ForeignKey('trips_table.id'), primary_key=True),
    db.Column('category_id', db.Integer, db.ForeignKey('category_table.id'), primary_key=True)
)

class Trip(db.Model, BaseModel):

    __tablename__ = 'trips_table'

    name = db.Column(db.String(50), nullable=False)
    images = db.Column(db.String(128))
    description = db.Column(db.String(128), nullable=False)
    budget = db.Column(db.Integer, nullable=False)
    number_of_days = db.Column(db.Integer, nullable=False)
    time_of_year = db.Column(db.String(20), nullable=False)
    categories = db.relationship('Category', secondary=trips_categories, backref='trips')
    creator_id = db.Column(db.Integer, db.ForeignKey('user_table.id'))
    creator = db.relationship('User', backref='created_trip')
    liked_by = db.relationship('User', secondary=likes, backref='likes')

class TripSchema(ma.ModelSchema):
    categories = fields.Nested('CategorySchema', many=True)
    creator = fields.Nested('UserSchema', only=('id', 'username'))
    liked_by = fields.Nested('UserSchema', many=True, only=('id', 'username'))

    class Meta:
        model = Trip

from app import db, ma
from marshmallow import fields
from .base import BaseModel
from .category import Category
from .user import User
from .duration import Duration
from .budget import Budget

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
    images = db.Column(db.String(500))
    description = db.Column(db.String(128), nullable=False)
    creator_id = db.Column(db.Integer, db.ForeignKey('user_table.id'))
    budget = db.relationship('Budget')
    budget_id = db.Column(db.Integer, db.ForeignKey('budget_table.id'))
    duration = db.relationship('Duration')
    duration_id = db.Column(db.Integer, db.ForeignKey('duration_table.id'))
    categories = db.relationship('Category', secondary=trips_categories, backref='trips')
    creator = db.relationship('User', backref='created_trip')
    liked_by = db.relationship('User', secondary=likes, backref='likes')

class TripSchema(ma.ModelSchema):
    categories = fields.Nested('CategorySchema', many=True, only=('name',))
    creator = fields.Nested('UserSchema', only=('id', 'username'))
    liked_by = fields.Nested('UserSchema', many=True, only=('id', 'username'))
    budget = fields.Nested('BudgetSchema', only='cost')
    duration = fields.Nested('DurationSchema', only='duration')

    class Meta:
        model = Trip

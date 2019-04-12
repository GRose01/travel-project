from marshmallow import fields
from app import db, ma
from .base import BaseModel

class Budget(db.Model, BaseModel):
    __tablename__ = 'budget_table'

    cost = db.Column(db.String(40), unique=True, nullable=False)

class BudgetSchema(ma.ModelSchema):
    trips = fields.Nested('TripSchema', many=True, only=('name',))

    class Meta:
        model = Budget

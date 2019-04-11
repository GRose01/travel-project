from app import db, ma


class Destination(db.Model):
    __tablename__ = 'city'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    countrycode = db.Column(db.String(3), nullable=False)
    district = db.Column(db.String(50), nullable=False)
    population = db.Column(db.Integer, nullable=False)

class DestinationSchema(ma.ModelSchema):
    class Meta:
        model = Destination

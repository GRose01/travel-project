from app import db, ma


class Country(db.Model):
    __tablename__ = 'country'

    # id = db.Column(db.Integer, nullable=False, primary_key=True)
    code = db.Column(db.String(3), nullable=False, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    # continent = db.Column(db.String(50), nullable=False)
    region = db.Column(db.String(100), nullable=False)
    # surfacearea = db.Column(db.Integer, nullable=False)
    # indepyear = db.Column(db.Integer, nullable=False)
    # population = db.Column(db.Integer, nullable=False)
    # lifeexpectancy = db.Column(db.Integer, nullable=False)
    # gnp = db.Column(db.Integer, nullable=False)
    # gnpold = db.Column(db.Integer, nullable=False)
    # localname = db.Column(db.String, nullable=False)
    # governmentform = db.Column(db.String, nullable=False)
    # headofstate = db.Column(db.String)
    # capital = db.Column(db.String)
    # code2 = db.Column(db.Integer, nullable=False)
    countrycode_code = db.Column(db.String(3))



class CountrySchema(ma.ModelSchema):
    class Meta:
        model = Country

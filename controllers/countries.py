from flask import Blueprint
from models.country import Country, CountrySchema

api = Blueprint('countries', __name__)

country_schema = CountrySchema()

@api.route('/countries', methods=['GET'])
def index():
    countries = Country.query.all()

    return country_schema.jsonify(countries, many=True), 200

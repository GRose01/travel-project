from flask import Blueprint
from models.destination import Destination, DestinationSchema

api = Blueprint('destinations', __name__)

destination_schema = DestinationSchema()

@api.route('/destinations', methods=['GET'])
def index():
    destinations = Destination.query.all()

    return destination_schema.jsonify(destinations, many=True), 200

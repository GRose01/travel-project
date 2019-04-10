from flask import Blueprint
from models.trip import Trip, TripSchema
from models.category import Category

trip_schema = TripSchema()

api = Blueprint('trips', __name__)

# INDEX ROUTE
api.route('/trips', methods=['GET'])
def index():
    trips = Trip.query.all()
    return trip_schema.jsonify(trips, many=True), 200

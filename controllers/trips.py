from flask import Blueprint, jsonify, request, g
from models.trip import Trip, TripSchema
from models.category import Category
from models.duration import Duration
from models.budget import Budget
from lib.secure_route import secure_route


trip_schema = TripSchema()

api = Blueprint('trips', __name__)

# INDEX ROUTE
@api.route('/trips', methods=['GET'])
def index():
    trips = Trip.query.all()
    return trip_schema.jsonify(trips, many=True), 200


@api.route('/trips/<int:trip_id>', methods=['GET'])
def show(trip_id):
    trip = Trip.query.get(trip_id)
    return trip_schema.jsonify(trip), 200


@api.route('/trips', methods=['POST'])
@secure_route
def create():
    data = request.get_json()
    budget = Budget.query.get(data['budget_id'])
    duration = Duration.query.get(data['duration_id'])
    trip, errors = trip_schema.load(data)
    trip.budget = budget
    trip.duration = duration
    categories = list(data['category_id'])
    for x in categories:
        category = Category.query.get(x)
        trip.categories.append(category)
    trip.creator = g.current_user
    if errors:
        print(errors)
    trip.save()
    return trip_schema.jsonify(trip)


@api.route('/trips/<int:trip_id>', methods=['PUT'])
@secure_route
def update(trip_id):
    trip = Trip.query.get(trip_id)
    trip, errors = trip_schema.load(request.get_json(), instance=trip, partial=True)
    if errors:
        print(errors)
        return jsonify(errors), 422

    if trip.creator != g.current_user:
        return jsonify({'message': 'Unauthorized'}), 422

    trip.save()
    return trip_schema.jsonify(trip)

@api.route('/trips/<int:trip_id>', methods=['DELETE'])
@secure_route
def delete(trip_id):
    trip = Trip.query.get(trip_id)
    if trip.creator != g.current_user:
        return jsonify({'message': 'Unauthorized'}), 422
    trip.remove()
    return '', 204

# likes
@api.route('/trips/<int:trip_id>/like', methods=['GET'])
@secure_route
def like(trip_id):
    trip = Trip.query.get(trip_id)
    user = g.current_user
    trip.liked_by.append(user)
    trip.save()
    return trip_schema.jsonify(trip), 201

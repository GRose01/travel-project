from flask import Blueprint, jsonify
from models.duration import Duration, DurationSchema

api = Blueprint('durations', __name__)

duration_schema = DurationSchema()

@api.route('/durations', methods=['GET'])
def index():
    durations = Duration.query.all()

    return duration_schema.jsonify(durations, many=True), 200

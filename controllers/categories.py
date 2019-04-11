from flask import Blueprint, jsonify
from models.category import Category, CategorySchema

api = Blueprint('categories', __name__)

categories_schema = CategorySchema()

@api.route('/categories', methods=['GET'])
def index():
    categories = Category.query.all()

    return categories_schema.jsonify(categories, many=True), 200

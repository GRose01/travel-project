from flask import Blueprint, jsonify
from models.category import Category, CategorySchema

category_schema = CategorySchema()
api = Blueprint('categories', __name__)

@api.route('/categories', methods=['GET'])
def index():
    categories = Category.query.all()
    return category_schema.jsonify(categories, many=True), 200

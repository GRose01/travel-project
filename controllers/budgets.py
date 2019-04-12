from flask import Blueprint, jsonify
from models.budget import Budget, BudgetSchema

api = Blueprint('budgets', __name__)

budget_schema = BudgetSchema()

@api.route('/budgets', methods=['GET'])
def index():
    budgets = Budget.query.all()

    return budget_schema.jsonify(budgets, many=True), 200

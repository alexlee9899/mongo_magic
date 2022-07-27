from flask import request, Blueprint
from flask_jwt_extended import jwt_required

from services.support import support_question_add, support_question_list, support_question_solve

user_support_blueprint = Blueprint('support', __name__)

@user_support_blueprint.route('/support/question', methods=['POST'])
@jwt_required()
def add():
    return support_question_add(request.json)

@user_support_blueprint.route('/support/list', methods=['GET'])
@jwt_required()
def get_question_list():
    return support_question_list(request)

@user_support_blueprint.route('/support/solve', methods=['POST'])
@jwt_required()
def solve_question_():
    return support_question_solve(request.json)
from flask import request, Blueprint
from flask_jwt_extended import jwt_required

from services.service_questions import question_add, question_list

questions_blueprint = Blueprint('question', __name__)

@questions_blueprint.route('/question/addin', methods=['POST'])
def add():
    return question_add(request.json)

@questions_blueprint.route('/question/list', methods=['GET'])
@jwt_required()
def get_list():
    return question_list(request)

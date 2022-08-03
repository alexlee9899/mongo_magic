from flask import request, Blueprint
from flask_jwt_extended import jwt_required
from flasgger import Swagger
from flasgger.utils import swag_from
from services.service_questions import question_add, question_list, question_answer

questions_blueprint = Blueprint('question', __name__)

@questions_blueprint.route('/question/addin', methods=['POST'])
@jwt_required()
@swag_from('../docs/question/add_question.yml', methods=['POST'])
def add():
    return question_add(request.json)

@questions_blueprint.route('/question/list', methods=['GET'])
@jwt_required()
@swag_from('../docs/question/get_question.yml', methods=['GET'])
def get_list():
    return question_list(request)

@questions_blueprint.route('/question/answer', methods=['POST'])
@jwt_required()
@swag_from('../docs/question/answer_question.yml', methods=['POST'])
def get_answer():
    return question_answer(request.json)
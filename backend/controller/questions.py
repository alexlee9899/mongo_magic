from flask import request, Blueprint
from flask_jwt_extended import jwt_required

from services.service_questions import question_add

questions_blueprint = Blueprint('question', __name__)

@questions_blueprint.route('/question/addin', methods=['POST'])
def add():
    return question_add(request.json)
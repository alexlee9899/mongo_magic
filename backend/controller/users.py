from flask import request, Blueprint
from flask_jwt_extended import jwt_required

from services.service_users import user_register

users_blueprint = Blueprint('users', __name__)

# @users_blueprint.route('/register', methods=['GET'])
# def register():
#   return 'register'

@users_blueprint.route('/register', methods=['POST'])
def register():
  return user_register(request.json)
from flask import request, Blueprint
from flask_jwt_extended import jwt_required
from services.service_users import user_register, user_login, user_get_profile, user_update_profile

users_blueprint = Blueprint('users', __name__)

@users_blueprint.route('/users/register', methods=['POST'])
def register():
  return user_register(request.json)

@users_blueprint.route('/users/login', methods=['POST'])
def login():
  return user_login(request.json)

@users_blueprint.route('/users/profile', methods=['GET'])
@jwt_required()
def get_profile():
  return user_get_profile(request)

@users_blueprint.route('/users/update_profile', methods=['POST'])
@jwt_required()
def update_profile():
  return user_update_profile(request)

@users_blueprint.route('/', methods=['GET'])
def hello():
  return "hello"
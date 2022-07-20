import json
from datetime import datetime
from db.database import db_connect
import hashlib
from flask import make_response
from flask_jwt_extended import create_access_token, get_jwt_identity

db = db_connect()

def question_add(req):
  
  return make_response(json.dumps({'message': 'Question added'}), 200)
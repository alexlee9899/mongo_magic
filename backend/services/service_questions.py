import email
import json
from datetime import datetime

import jwt
from db.database import db_connect
import hashlib
from flask import make_response
from flask_jwt_extended import create_access_token, get_jwt_identity

db = db_connect()

def question_add(req):
  try:
    title = req['title']
    content = req['content']
    option = req['option']
    score_method = req['score_method']
    mutiable = req['mutiable']
    question_type = req['question_type']
    depend = req['depend']
    unit = req['unit']
    db_col = db['questions']
    new_question = {
      "title": title,
      "content": content,
      "option": option,
      "question_type": question_type,
      "score_method": score_method,
      "mutiable": mutiable,
      "depend": depend,
      "unit": unit,
    }
    id = db_col.insert_one(new_question).inserted_id
    return make_response(json.dumps({'q_id': str(id)}), 200)
  except Exception:
    return make_response(json.dumps({'message': 'Input Error'}), 400)
  
def question_list(req):
  try:
    db_col = db['questions']
    questions = list(db_col.find())
    for question in questions:
      question['_id'] = str(question['_id'])
    return make_response(json.dumps({'question_list': questions}), 200)
  except Exception:
    return make_response(json.dumps({'message': 'Server Error'}), 500)

def question_temp_save(req):
  try:
    db_col = db['questions_cache']
    email = get_jwt_identity()
    pack = {
      "email": email,
      "metadata": req
    }
    db_col.insert_one(pack)
    return make_response(json.dumps({'message': 'success saved'}), 200)
  except:
    return make_response(json.dumps({'message': 'Server Error'}), 500)

def question_temp_load(req):
  try:
    email = get_jwt_identity()
    pack = db['questions_cache'].find_one({'email': email})
    return make_response(json.dumps({ email: pack['metadata']}), 200)
  except:
    return make_response(json.dumps({'message': 'Server Error'}), 500)

def question_answer(req):
  return "success"
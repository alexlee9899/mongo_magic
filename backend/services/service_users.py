import json
from datetime import datetime
from flask import Flask, request, send_file
from flask_restx import Resource, Api, fields, reqparse
from flask_sqlalchemy import SQLAlchemy
import requests
import re
import pandas as pd
from io import BytesIO
import pymongo
from db.database import db_connect
import hashlib

db = db_connect()

def user_register(req):
  fullname = req['fullname']
  password = req['password']
  email = req['email']
  create_time = datetime.now()
  
  
  password_md5 = hashlib.md5(password.encode('utf-8')).hexdigest()
  new_user = {
    "fullname": fullname,
    "password": password_md5,
    "email": email,
    "create_time": create_time
  }
  db_col = db['users']
  db_col.insert_one(new_user)
  
  return 'register'
  
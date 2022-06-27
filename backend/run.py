import json
from datetime import datetime
from flask import Flask, request, send_file
from flask_restx import Resource, Api, fields, reqparse
from flask_sqlalchemy import SQLAlchemy
import requests
import re
import pandas as pd
import matplotlib.pyplot as plt
from io import BytesIO
import pymongo
import db

app = Flask(__name__)
api = Api(app, title='API for Mongo Magic', default ='Api list', default_label='')
database = db.db_connect()
# db_col = database['listingsAndReviews']

# mydoc = list(db_col.find({}, {'_id': 0, 'listing_url':1, 'minimum_nights': 1}))
# print(mydoc)

if __name__ == '__main__':
    app.run(debug=True)
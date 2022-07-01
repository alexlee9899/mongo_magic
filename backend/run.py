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


from controller.users import users_blueprint
app.register_blueprint(users_blueprint)


if __name__ == '__main__':
    app.run(debug=True)
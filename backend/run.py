from flask import Flask
from flask_restx import Resource, Api, fields, reqparse
from flask_jwt_extended import JWTManager

app = Flask(__name__)

app.config["JWT_ALGORITHM"] = "HS256"
app.config["JWT_SECRET_KEY"] = "deloitte"
jwt = JWTManager(app)
"1"

from controller.users import users_blueprint
app.register_blueprint(users_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask
from flask_restx import Resource, Api, fields, reqparse
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from datetime import timedelta

app = Flask(__name__)

app.config["JWT_ALGORITHM"] = "HS256"
app.config["JWT_SECRET_KEY"] = "deloitte"
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=100)
jwt = JWTManager(app)
CORS(app)


from controller.users import users_blueprint
from controller.questions import questions_blueprint
from controller.support import user_support_blueprint
app.register_blueprint(questions_blueprint)
app.register_blueprint(users_blueprint)
app.register_blueprint(user_support_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
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
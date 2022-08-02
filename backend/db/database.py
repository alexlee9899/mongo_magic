import pymongo
from config import database_url
def db_connect():
    client = pymongo.MongoClient(database_url)
    db = client.mongo_magic
    return db



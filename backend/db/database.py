import pymongo
from db.config import get_db_url
def db_connect():
    client = pymongo.MongoClient(get_db_url())
    db = client.mongo_magic
    return db



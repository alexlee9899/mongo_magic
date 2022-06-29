import pymongo
from pyparsing import dbl_quoted_string

def db_connect():
    client = pymongo.MongoClient("mongodb+srv://sam:sam@cluster0.ubskf.mongodb.net/?retryWrites=true&w=majority")
    db_set = client.test
    return db



import pymongo

def db_connect():
    client = pymongo.MongoClient("mongodb+srv://sam:sam@cluster0.ubskf.mongodb.net/?retryWrites=true&w=majority")
    db = client.mongo_magic
    return db



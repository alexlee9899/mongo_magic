import pymongo

def db_connect():
    # client = pymongo.MongoClient("mongodb+srv://sam:sam@cluster0.sjc0p.mongodb.net/?retryWrites=true&w=majority")
    # db = client.sample_airbnb
    import pymongo


    client = pymongo.MongoClient("mongodb+srv://sam:sam@cluster0.ubskf.mongodb.net/?retryWrites=true&w=majority")
    db = client.test
    return db



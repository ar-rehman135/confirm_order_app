from flask_mongoengine import MongoEngine

db_obj = MongoEngine()
def init_db(app):
    try:
        db_obj.init_app(app)
    except Exception as ex:
        data = {"error":"Failed To Connect Database" + str(ex)}
        print(data)

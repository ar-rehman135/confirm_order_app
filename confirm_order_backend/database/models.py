from .db import db_obj as db

class UserDataTable(db.Document):
    input_request = db.StringField()
    output_request = db.StringField()
    ip_address = db.StringField()
    dateTime = db.DateTimeField()
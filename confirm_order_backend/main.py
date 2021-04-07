import datetime
import json
from flask import Flask, request, send_from_directory
from flask_cors import cross_origin
from flask_mongoengine import MongoEngine

app = Flask(__name__, static_folder='./build', static_url_path='/')
app.config['MONGODB_SETTINGS'] = {
    'db': 'confirm_order',
    'host': 'localhost',
    'port': 27017
}
try:
    db = MongoEngine()
    db.init_app(app)
except:
    data = {"error":"Failed To Connect Database"}
    print(data)

class UserData(db.Document):
    input_request = db.StringField()
    output_request = db.StringField()
    ip_address = db.StringField()
    date = db.DateTimeField()


@app.route("/", defaults={"path": ""})
@app.route("/<string:path>")
@app.route("/<path:path>")
def index(path):
  print (path)
  return send_from_directory(app.static_folder, "index.html")

#######################End File #########################

def saveToDb(ip, op, ipaddre):
    # print(datetime.datetime.now().isoformat())
    # u = UserData()
    # u.input_request = ip
    # u.output_request = op
    # u.ip_address = ipaddre
    # u.date = datetime.datetime.now().isoformat()
    # u.save()
    return  ""

@app.route('/api/handle_data', methods=['POST', 'GET'])
@cross_origin()
def insert_data():
    if request.method == 'GET':
        data = {
            'state': 'A',
            'type': 'text-input',
            'text': 'Hello, How old are you!'
        }
        j = json.dumps(data)
        saveToDb('', j, request.environ['REMOTE_ADDR'])
        return j
    else:
        record = json.loads(request.data)
        if 'state' in record:
            state = record['state']
        if 'response' in record:
            response = record['response']
        if state == 'A' and response:
            response  = int(response)
            if response<18 and response>0:
                options = ['Choclate', 'Vanilla', 'Strawberries', 'Mango']
                data = {
                    'state': 'B1',
                    'type': 'multiple-choice',
                    'text': 'Choose Options',
                    'options': options
                }
                ip_json = json.dumps({
                    'state': state,
                    'response': response
                })
                op_json = json.dumps(data)
                saveToDb(ip_json, op_json, request.environ['REMOTE_ADDR'])
                return op_json
            else:
                k = 18
                age_list = []
                while k<=response:
                    age_list.append(str(k))
                    k+=1
                age_list.append("None")
                data = {
                    'state': 'B2',
                    'type': 'multiple-choice',
                    'text': 'You are ' +str(response)+ ' years old What was You Best Age ?',
                    'options': age_list
                }
                ip_json = json.dumps({
                    'state': state,
                    'response': response
                })
                op_json = json.dumps(data)
                saveToDb(ip_json, op_json, request.environ['REMOTE_ADDR'])
                return op_json
        if state == 'B1' and response:
            data = {
                'state': 'C1',
                'text': 'Order Confirmed'
            }
            ip_json = json.dumps({
                'state': state,
                'response': response
            })
            op_json = json.dumps(data)
            saveToDb(ip_json, op_json, request.environ['REMOTE_ADDR'])
            return op_json
        if state == 'B2' and response:
            content = [
                {
                    "type": 'Title',
                    "content": 'Template'
                },
                {
                    "type": 'Image',
                    "url": ''
                },
                {
                    "type": 'Text',
                    "text": 'hello'
                },
                {
                    "type": 'Text',
                    "text": 'hello hy'
                }
            ]
            data = {
                'state': 'C2',
                'text': 'text-output',
                'content': content
            }
            ip_json = json.dumps({
                'state': state,
                'response': response
            })
            op_json = json.dumps(data)
            saveToDb(ip_json, op_json, request.environ['REMOTE_ADDR'])
            return op_json

        return json.dumps({'error': 'Invalid Data'})

@app.route('/api/delete/data/all', methods=['GET'])
@cross_origin()
def delete_data():
    if 'delete_data' in request.args:
        delete_chk = request.args.get('delete_data')

        if delete_chk == 'apiKey':
            data_set = UserData.objects().all()
            for data in data_set:
                data.delete()
            return json.dumps({"sucess": "SuccessFully Delelted All Data"})

    return json.dumps({"error": "Failed To Delete Data"})

if __name__ == "__main__":
    app.run(host='192.168.8.104', port=5000, debug=True)



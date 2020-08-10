import socketio
import json

sio = socketio.Client()

@sio.event
def connect():
    print('connection established')
    msg = {"type" : "msg", "msg": "Python client test message"}
    out = json.dumps(msg)
    # The first argument of this method is event name. Events can be of the
    # following types: 'connect', 'message', 'disconnect'. According to
    # specified type, the server will react to the action
    sio.emit('message', out)

@sio.event
def message(data):
    # msg = json.loads(data)
    # print('Recieved message: ', data['msg'])
    print(data)

@sio.event
def disconnect():
    print('disconnected from server')

sio.connect('http://localhost:11000')
sio.wait()

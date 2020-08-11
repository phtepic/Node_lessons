# It's neccessay to install package 'python-socketio' to be able to use this
# import (pip3 install python-socketio)
import socketio
# Needs to be imported to make work with JSONs possible
import json

# Creates client instance
sio = socketio.Client()

# Following functions are event handlers: they are called whenever a particular
# event happens. For complete set of events see documentation.
# https://python-socketio.readthedocs.io/
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
    # Incoming JSON has format {"type": "msg" "msg": "SOME MESSAGE"}
    # It needs to be parsed using json.loads() method - it converts JSON like
    # string to Python dictionary
    m = json.loads(data)
    print('Recieved message: ', m['msg'])

@sio.event
def disconnect():
    print('disconnected from server')

# Connects client to specified host
sio.connect('http://localhost:11000')
# Makes the client wait until the server takes an action
sio.wait()

"""
If we want to do something in particular, we omit the 'sio.wait()' statement and
we write some code instead - this code will be executed (e.g. endless loop which
is sending data somewhere)
"""


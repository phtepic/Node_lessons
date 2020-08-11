# It's neccessay to install package 'python-socketio' to be able to use this
# import (pip3 install python-socketio)
import socketio
# Needs to be imported to make work with JSONs possible
import json
# This import is needed for the sleep() method
import time

# Creates client instance
sio = socketio.Client()

# Following functions are event handlers: they are called whenever a particular
# event happens. For complete set of events see documentation.
# https://python-socketio.readthedocs.io/
@sio.event
def connect():
    print('connection established')
    msg = {"type" : "msg", "msg": "Python client welcome message"}
    out = json.dumps(msg)
    # The first argument of this method is event name. Events can be of the
    # following types: 'connect', 'message', 'disconnect'. According to
    # specified type, the server will react to the action
    sio.emit('message', out)

@sio.event
def message(data):
    # Processing the message here is a bit tricky: you need to check the type
    # of the data parameter. Python client is set to send JSON in a text format
    # whereas JS/NODE.js JSON is interpreted as dictionary by default.
    # Therefore we need to check datatype.
    if isinstance(data, dict):
        print(data['msg'])
    else:
        # Incoming JSON has format {"type": "msg" "msg": "SOME MESSAGE"}
        # It needs to be parsed using json.loads() method - it converts JSON like
        # string to Python
        message = json.loads(data)
        print(message['msg'])

@sio.event
def disconnect():
    print('disconnected from server')

# Connects client to specified host
sio.connect('http://localhost:11000')

"""
# Makes the client wait until the server takes an action
sio.wait()
"""

"""
If we want to do something in particular, we omit the 'sio.wait()' statement and
we write some code instead - this code will be executed (e.g. endless loop which
is sending data somewhere)
"""
while True:
    msg = {"type" : "msg", "msg": "Python client test message"}
    out = json.dumps(msg)
    sio.emit('message', out)
    time.sleep(1)

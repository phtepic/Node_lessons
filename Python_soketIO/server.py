# For server it's neccessay to install package 'eventlet' which manages 'listening'
# of the server to the chosen port (pip3 install -U eventlet)
import eventlet
# It's neccessay to install package 'python-socketio' to be able to use this
# import (pip3 install python-socketio)
import socketio
# Needs to be imported to make work with JSONs possible
import json

# First we need to create server instance
sio = socketio.Server()
# This makes the server send forward any traffic that is not intended for it.
# It makes easier to integrate the server with other apps.
# Note: static_files parameter configures the server, for the complete reference
# see the documentation (https://python-socketio.readthedocs.io/)
app = socketio.WSGIApp(sio, static_files={
    '/': {'content_type': 'text/html', 'filename': 'index.html'}
})

# Following functions are event handlers: they are called whenever a particular
# event happens. For complete set of events see documentation.
# https://python-socketio.readthedocs.io/
@sio.event
def connect(sid, environ):
    msg = {"type" : "msg", "msg": "Python server test message"}
    out = json.dumps(msg)
    # The first argument of this method is event name. Events can be of the
    # following types: 'connect', 'message', 'disconnect'. According to
    # specified type, the server will react to the action
    sio.emit('message', out)
    print('Client connected: ', sid)

@sio.event
def disconnect(sid):
    print('Client disconnected: ', sid)

# Rection to specified event ('message'), this function handles action when this
# event occures
@sio.event
def message(sed, data):
    # Incoming JSON has format {"type": "msg" "msg": "SOME MESSAGE"}
    # It needs to be parsed using json.loads() method - it converts JSON like
    # string to Python

    message = json.loads(data)
    print(message['msg'])


if __name__ == '__main__':
    # This starts the server event loop
    eventlet.wsgi.server(eventlet.listen(('', 11000)), app)

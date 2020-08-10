import eventlet
import socketio
import json

sio = socketio.Server()
app = socketio.WSGIApp(sio, static_files={
    '/': {'content_type': 'text/html', 'filename': 'index.html'}
})

@sio.event
def connect(sid, environ):
    sio.emit('message', 'Python server test message')
    print('Client connected: ', sid)

@sio.event
def disconnect(sid):
    print('Client disconnected: ', sid)

# Rection to specified event ('message'), this function handles action when this
# event occures
@sio.event
def message(sed, data):
    # Incoming JSON has format 'type: "msg" msg: "JS client test msg"'
    # It behaves like a dictionary by default -> so it's possible to call
    # dict['key'] and it returns asociated value
    print(data['msg'])


if __name__ == '__main__':
    eventlet.wsgi.server(eventlet.listen(('', 11000)), app)

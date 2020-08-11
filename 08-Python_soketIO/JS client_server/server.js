const http_server = require("http").createServer();
const io_server = require("socket.io")(http_server);
const server_port = 11000;


async function run_server() {
  http_server.listen(server_port, () =>
    console.log("Server listening on port: " + server_port)
  );

  io_server.on("connection", (socket) => {
    console.log("New client connected!");

    io_server.send({
      type: "msg",
      msg: "JS server says hello"
    });

    socket.on("message", (data) => {
      // It is neccessary to parse JSON like string before use
      let msg = JSON.parse(data)
      console.log(msg.msg);
    });
  });

  io_server.on("disconnect", (evt) => {
    console.log("somebody left");
  });
}

async function send_test_msg() {
  io_server.send({
    type: "msg",
    msg: "JS server test message!"
  })
}

async function run() {
  await run_server();
  setInterval(send_test_msg, 1000)
}

run();
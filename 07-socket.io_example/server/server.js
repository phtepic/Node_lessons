const http_server = require("http").createServer();
const io_server = require("socket.io")(http_server);
const server_port = 11000;

async function run_server() {
  http_server.listen(server_port, () =>
    console.log("Server listening on port: " + server_port)
  );

  io_server.on("connection", (socket) => {
    console.log("connected");
    socket.on("message", (data) => {
      console.log(data);
      //find adn update document in mogodb
    });
  });

  io_server.on("disconnect", (evt) => {
    console.log("somebody left");
  });
}

async function run() {
  await run_server();
}

run();

const client = require("socket.io-client")("http://localhost:11000");

async function run_client() {
  client.on("disconnect", function() {});
  client.on("connect", () => {
    console.log("running");
    client.send("JS client says hello!")
  });

  client.on("message", (data) => {
    console.log(data);
  });
}

async function send_data(data) {
  // client.send("JS client test message!");
  client.send({
    type: "msg",
    msg: "JS client test msg"
  })
}

async function run() {
  await run_client();
  setInterval(send_data, 1000);
}

run();
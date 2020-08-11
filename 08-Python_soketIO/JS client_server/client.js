const client = require("socket.io-client")("http://localhost:11000");

async function run_client() {
  client.on("disconnect", function() {});
  client.on("connect", () => {
    console.log("running");
    client.send({
      type: "msg",
      msg: "JS client welcome msg"
    })
  });

  client.on("message", (data) => {
    // It is neccessary to parse JSON like string before use
    let msg = JSON.parse(data)
    console.log(msg.msg);
  });
}

async function send_data(data) {
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
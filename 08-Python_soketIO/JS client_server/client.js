const client = require("socket.io-client")("http://localhost:11000");

async function run_client() {
  client.on("disconnect", function() {});
  client.on("connect", () => {
    console.log("running");
    client.send({
      type: "msg",
      msg: "JS client test msg"
    })
  });

  client.on("message", (data) => {
    if (typeof data === 'string') {
      // This message is send by Python client - it is a string
      // It is neccessary to parse JSON like string before use
      let msg = JSON.parse(data);
      console.log(msg.msg);
    } else {
      // This message is send by JS server - it has form of JSON by default
      console.log(data.msg);
    }
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
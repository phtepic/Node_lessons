const client = require("socket.io-client")("http://localhost:11000");

async function run_client() {
  client.on("disconnect", function () {});
  client.on("connect", () => {
    console.log("connected");
  });

  client.on("message", (data) => {
    console.log(data);
  });
}

async function send_data(data) {
  client.send(data);
}

async function run() {
  await run_client();
  await send_data({ temperature: 36, vbat: 60 });
}

run();

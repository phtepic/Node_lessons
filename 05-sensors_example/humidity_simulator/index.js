const axios = require("axios");

async function simulate_value(min, max) {
  return Math.random() * (max - min) + min;
}

async function simulate_humidity() {
  return await simulate_value(0, 100);
}

const timer_interval = 1000;
async function on_timer() {
  const humidity = await simulate_humidity();
  console.log("Humidity: " + humidity);

  await post_sensor_value(3333, humidity);
}

function run_timer() {
  setInterval(on_timer, timer_interval);
}

async function post_sensor_value(serial, value) {
  try {
    await axios.post("http://localhost:5001/update_sensor_value", {
      serial: serial,
      value: value
    });
  } catch (err) {
    console.log(err);
  }
}

run_timer();

const axios = require("axios");

async function simulate_value(min, max) {
  return Math.random() * (max - min) + min;
}

async function simulate_temperature() {
  return await simulate_value(0, 25);
}

const timer_interval = 1000;
async function on_timer() {
  const temperature = await simulate_temperature();
  console.log("Temperature: " + temperature);

  await post_sensor_value(2222, temperature);
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

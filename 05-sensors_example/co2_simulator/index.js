const axios = require("axios");

async function simulate_value(min, max) {
  return Math.random() * (max - min) + min;
}

async function simulate_co2() {
  return await simulate_value(0, 500);
}
const timer_interval = 1000;
async function on_timer() {
  const co2 = await simulate_co2();
  console.log("CO2: " + co2);

  await post_sensor_value(4444, co2);
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

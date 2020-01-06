const axios = require("axios");
const timer_interval = 1000;
async function get_sensors() {
  try {
    let res = await axios.get("http://localhost:5000/get_sensors", {
      params: {},
      headers: {}
    });
    if (res.statusText === "OK") {
      console.log(res.data.sensors);
    } else {
      console.log("Something went bad...");
    }
  } catch (err) {
    console.log(err);
  }
}

setInterval(get_sensors, timer_interval);

const mongoose = require("mongoose");
const sensor = require("./models/sensor");

const sensors = [
  { serial: 1111, type: "CO", value: 2500, online: true },
  { serial: 2222, type: "Temperature", value: 25, online: true },
  { serial: 3333, type: "Humidity", value: 65, online: true },
  { serial: 4444, type: "CO2", value: 1500, online: true }
];

async function connect_mongo() {
  console.log("Connecting to db...");
  await mongoose.connect("mongodb://localhost:27017/lesson", {
    useNewUrlParser: true
  });
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
  console.log("Connected...");
}

async function save_data(data) {
  for (let index = 0; index < data.length; index++) {
    const d = data[index];
    const sensor_to_save = new sensor(d);
    console.log("Saving... " + sensor_to_save);
    await sensor_to_save.save();
  }
  console.log("Done...");
}

async function run() {
  await connect_mongo();
  await save_data(sensors);
}
run();

const mongoose = require("mongoose");
const sensor = require("./models/sensor");

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
async function find_sensors() {
  return await sensor.find({});
}
async function find_sensor(serial) {
  return await sensor.find({ serial: serial });
}
async function run() {
  await connect_mongo();
  console.log("Sensors:");
  const sensors = await find_sensors();
  console.log(sensors);
  console.log("Sensor:");
  const sensor = await find_sensor(1111);
  console.log(sensor);
}
run();

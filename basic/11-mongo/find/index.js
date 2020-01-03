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
async function run() {
  await connect_mongo();
  await find_sensors();
}
run();

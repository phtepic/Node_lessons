const mongoose = require("mongoose");
const sensor = require("./models/sensor");

c;
async function connect_mongo() {
  mongoose.connect("mongodb://localhost:27017/lesson", {
    useNewUrlParser: true
  });
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
}
async function delete_all() {
  await sensor.remove({});
}
async function delete_sensor(serial) {
  await sensor.remove({ serial: serial });
}
async function run() {
  await connect_mongo();
  await delete_all();
}
run();

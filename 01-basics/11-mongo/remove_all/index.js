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
async function remove_all() {
  console.log("Removing all data..");
  await sensor.remove({});
  console.log("Done...");
}
async function run() {
  await connect_mongo();
  await remove_all();
}
run();

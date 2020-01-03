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
async function update_value(serial, value) {
  return await sensor.findOneAndUpdate(
    {
      serial: serial
    },
    {
      $set: {
        value: value
      }
    },
    {
      new: true
    }
  );
}

async function run() {
  await connect_mongo();
  console.log("Updating...");
  await update_value(1111, 3500);
  console.log("Done...");
}
run();

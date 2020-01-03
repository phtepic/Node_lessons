const db = require("./helpers/aa-sqlite");

const sensors = [
  { serial: 1111, type: "CO", value: 2500, online: true },
  { serial: 2222, type: "Temperature", value: 25, online: true },
  { serial: 3333, type: "Humidity", value: 65, online: true },
  { serial: 4444, type: "CO2", value: 1500, online: true }
];

async function connect_db() {
  await db.open(
    "C:/Users/root/Documents/GitHub/Node_lessons/03-sqlite3/db/test"
  );
  await db.run("PRAGMA journal_mode = WAL");
}
async function run() {
  console.log("Connecting into database...");
  await connect_db();
  console.log("Done...");
  await insert_sensors();
  console.log("Done...");
}

async function insert_sensor(sensor) {
  let query =
    "INSERT INTO SENSOR(serial, type, value, online) VALUES(" +
    "'" +
    sensor.serial.toString() +
    "'" +
    "," +
    "'" +
    sensor.type.toString() +
    "'" +
    "," +
    "'" +
    sensor.value.toString() +
    "'" +
    "," +
    "'" +
    sensor.online.toString() +
    "'" +
    ")";
  await db.run(query);
  console.log("Inserting sensor " + sensor + " ...");
}
async function insert_sensors() {
  for (let index = 0; index < sensors.length; index++) {
    await insert_sensor(sensors[index]);
  }
}

run();

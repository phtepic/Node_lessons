const db = require("./helpers/aa-sqlite");
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
  const sensors = await select_sensors();
  console.log(sensors);
  const sensor = await select_sensor(1111);
  console.log(sensor);
}

async function select_sensors() {
  let query = "SELECT * FROM SENSOR";
  const result = await db.all(query, []);
  return result;
}
async function select_sensor(serial) {
  const query =
    "SELECT * FROM SENSOR WHERE serial = " + "'" + serial.toString() + "'";
  const result = await db.all(query, []);
  return result[0];
}

run();

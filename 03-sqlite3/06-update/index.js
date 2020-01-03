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
  console.log("Updating sensor...");
  await update_sensor(1111, 3500);
  console.log("Done...");
}
async function update_sensor(serial, value) {
  let query =
    "UPDATE SENSOR SET value = " +
    value.toString() +
    " WHERE serial = " +
    "'" +
    serial +
    "'";
  console.log(query);
  await db.run(query);
}

run();

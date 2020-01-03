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
  console.log("Deleting all from table...");
  await delete_all();
  console.log("Done...");
}
async function delete_all() {
  let query = "DELETE FROM SENSOR";
  await db.run(query);
}
run();

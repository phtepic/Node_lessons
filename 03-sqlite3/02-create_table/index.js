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
  console.log("Creating table sensors...");
  await create_table();
  console.log("Done...");
}
async function create_table() {
  let query =
    "CREATE TABLE SENSOR(serial INT PRIMARY KEY NOT NULL, type TEXT NOT NULL, value INT NOT NULL, online INT NOT NULL)";
  await db.run(query);
}

run();

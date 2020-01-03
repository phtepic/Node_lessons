const db = require("./helpers/aa-sqlite");
async function connect_db() {
  await db.open(
    "C:/Users/root/Documents/GitHub/Node_lessons/03-sqlite3/db/test"
  );
  await db.run("PRAGMA journal_mode = WAL");
}
async function run() {
  console.log("Creating database...");
  await connect_db();
  console.log("Done...");
}

run();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

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
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// REST api
const routes = require("./routes/RESTRoutes");
routes(app);
connect_mongo();
app.listen(5000, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("Server is runnig on http://localhost:5000");
});

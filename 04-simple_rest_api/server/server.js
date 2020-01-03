const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// REST api
const routes = require("./routes/RESTRoutes");
routes(app);

app.listen(5001, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("Server is runnig on http://localhost:5001");
});

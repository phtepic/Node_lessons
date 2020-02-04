import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes/RESTRoutes.mjs";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(5001, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("Server is runnig on http://localhost:5001");
});

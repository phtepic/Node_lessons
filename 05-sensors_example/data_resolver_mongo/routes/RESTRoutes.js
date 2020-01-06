module.exports = function(app) {
  const controller = require("../controllers/controller");
  app.route("/update_sensor_value").post(controller.update_sensor);
};

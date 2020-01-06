module.exports = function(app) {
  const controller = require("../controllers/controller");
  app.route("/get_sensors").get(controller.get_sensors);
};

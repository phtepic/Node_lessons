module.exports = function(app) {
  const controller = require("../controllers/controller");
  app.route("/get_test").get(controller.get_test);
  app.route("/post_test").post(controller.post_test);
};

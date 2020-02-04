import { get_test, post_test } from "./../controllers/controller.mjs";
export function routes(app) {
  app.route("/get_test").get(get_test);
  app.route("/post_test").post(post_test);
}

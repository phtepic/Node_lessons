const axios = require("axios");

async function get_test() {
  try {
    let res = await axios.get("http://localhost:5001/get_test", {
      params: { test_message: "Get hello API Server" },
      headers: {}
    });
    if (res.statusText === "OK") {
      console.log(res.data);
    } else {
      console.log("Something went bad...");
    }
  } catch (err) {
    console.log(err);
  }
}
async function post_test() {
  try {
    let res = await axios.post("http://localhost:5001/post_test", {
      test_message: "Post hello API Server"
    });
    if (res.statusText === "OK") {
      console.log(res.data);
    } else {
      console.log("Something went bad...");
    }
  } catch (err) {
    console.log(err);
  }
}
get_test();
post_test();

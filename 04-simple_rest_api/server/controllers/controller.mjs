export async function get_test(req, res) {
  const { test_message } = await req.query;
  console.log(req.query);
  let data = {};
  data.received_test_message = test_message;
  data.response = "Thank you for get...";
  res.json(data);
}

export async function post_test(req, res) {
  const { test_message } = await req.body;
  console.log(req.body);
  let data = {};
  data.received_test_message = test_message;
  data.response = "Thank you for post...";
  res.json(data);
}

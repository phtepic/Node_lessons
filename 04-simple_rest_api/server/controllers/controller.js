exports.get_test = async function(req, res) {
  const { test_message } = await req.query;
  console.log(req.query);
  let data = {};
  data.received_test_message = test_message;
  data.response = "Thank you for get...";
  res.json(data);
};

exports.post_test = async function(req, res) {
  const { test_message } = await req.body;
  console.log(req.body);
  let data = {};
  data.received_test_message = test_message;
  data.response = "Thank you for post...";
  res.json(data);
};

const sensor = require("./../models/sensor");

async function update_value(serial, value) {
  return await sensor.findOneAndUpdate(
    {
      serial: serial
    },
    {
      $set: {
        value: value
      }
    },
    {
      new: true
    }
  );
}

exports.update_sensor = async function(req, res) {
  const { serial, value } = await req.body;
  console.log(req.body);
  let data = {};
  await update_value(serial, value);
  res.json(data);
};

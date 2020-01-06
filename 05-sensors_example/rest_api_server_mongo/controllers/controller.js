const sensor = require("./../models/sensor");

async function find_sensors() {
  return await sensor.find({});
}
exports.get_sensors = async function(req, res) {
  let data = {};
  data.sensors = await find_sensors();
  res.json(data);
};

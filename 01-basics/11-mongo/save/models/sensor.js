const mongoose = require("mongoose");

const SensorSchema = new mongoose.Schema({
  serial: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  value: { type: Number, required: true },
  online: { type: Boolean, required: true }
});

module.exports = mongoose.model("sensor", SensorSchema);

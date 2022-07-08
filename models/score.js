const User = require("../models/user");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema(
  {
    name: String,
    composer: String,
    key: String,
    notty: String,
    file: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Score", scoreSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema(
  {
    name: String,
    composer: String,
    key: String,
    notty: String,
    file: String,
  },
  {
    timestamps: true,
  }
);

const userSchema = new Schema(
  {
    name: String,
    email: String,
    googleId: String,
    scores: [scoreSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = [
  mongoose.model("User", userSchema),
  mongoose.model("Score", scoreSchema),
];

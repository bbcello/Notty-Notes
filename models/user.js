const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    name: String,
    composer: String,
    key: String,
    notty: String,
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
    posts: [postSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

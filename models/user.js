const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    googleId: String,
    scores: [{ type: Schema.Types.ObjectId, ref: "Score" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

const score = require("../models/score");
const Score = require("../models/score");
const User = require("../models/user");

function index(req, res, next) {
  Score.find({}, function (err, scores) {
    if (err) return next(err);
    console.log(scores);
    res.render("users/index", {
      scores,
      user: req.user,
    });
  });
}
function newScore(req, res) {
  res.render("users/new", {
    title: "New Scores",
    user: req.user,
    scores: req.score,
  });
}

function create(req, res) {
  let newScore = new Score(req.body);
  newScore.owner = req.user;
  newScore.save();
  req.user.scores.push(newScore);
  req.user.save(function (err) {
    res.redirect("/");
  });
}

function myScores(req, res, next) {
  Score.find({ owner: req.user }, function (err, score) {
    res.render("users/myscores", { score, user: req.user });
  });
}

function show(req, res) {
  Score.findById(req.params.id, function (err, score) {
    res.render("users/show", { score, user: req.user });
  });
}

function deleteScore(req, res) {
  Score.findByIdAndDelete(req.params.id, function (err, score) {
    if (err) return next(err);
    res.redirect("/myscores");
  });
}

function update(req, res) {
  console.log("update reached with body: ", req.body);
  req.user.scores.findByIdAndUpdateOne(req.params.id, req.body);
  req.user.scores.save(function (err) {
    res.redirect(`/myscores/${req.params.id}`);
  });
}

module.exports = {
  index,
  create,
  new: newScore,
  myScores,
  show,
  delete: deleteScore,
  update,
};

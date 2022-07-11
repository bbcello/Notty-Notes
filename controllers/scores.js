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

function deleteScore(req, res, next) {
  Score.findOneAndDelete(req.params.id, function (err) {
    if (err) {
      res.redirect("/myscores");
    } else {
      res.redirect("/myscores");
    }
  });
}

function edit(req, res) {
  Score.findById(req.params.id, function (err, score) {
    res.render("users/edit", {
      title: "Edit Score",
      user: req.user,
      score,
    });
  });
}

function update(req, res) {
  Score.findById(req.params.id, function (err, score) {
    if (!score) return false;
    score.name = req.body.name;
    score.composer = req.body.composer;
    score.key = req.body.key;
    score.notty = req.body.notty;
    score.file = req.body.file;
    score.save();
    res.redirect("/myscores");
  });
}

module.exports = {
  index,
  create,
  new: newScore,
  myScores,
  show,
  delete: deleteScore,
  edit,
  update,
};

const User = require("../models/user");

function index(req, res, next) {
  User.find({}, function (err, users) {
    if (err) return next(err);
    console.log(users);
    res.render("users/index", {
      users,
      user: req.user,
      name: req.query.name,
    });
  });
}

function myScore(req, res) {
  res.render("users/myscores", {
    title: "My Scores",
    user: req.user,
    name: req.query.name,
  });
}

function newScore(req, res) {
  res.render("users/new", {
    title: "New Scores",
    user: req.user,
    name: req.query.name,
  });
}

function create(req, res) {
  //req.user is the mongoose doc for logged in user
  User.findById(req.params.id, function (err, user) {
    req.user.scores.push(req.body);
    req.user.save(function (err) {
      res.redirect("/");
    });
  });
}

module.exports = {
  index,
  create,
  new: newScore,
  myScore,
};

const User = require("../models/user");

function index(req, res, next) {
  console.log(req.query);
  // the user has submitted the search form or now
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  // Default to sorting by name
  let sortKey = req.query.sort || "name";
  Student.find(modelQuery)
    .sort(sortKey)
    .exec(function (err, students) {
      if (err) return next(err);
      //Passing search values, name & sortky for use in the EJS
      res.render("users/index", { users, name: req.query.name, sortKey });
    });
}
function addPost(req, res, next) {
  req.user.posts.push(req.body);
  req.user.save(function (err) {
    res.redirect("/user");
  });
}
module.exports = {
  index,
  addPost,
};

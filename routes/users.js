var router = require("express").Router();
var usersCtrl = require("../controllers/users");

// GET /users
router.get("/users", usersCtrl.index);

// POST /posts
router.post("/posts", isLoggedIn, usersCtrl.addPost);

// DELET /posts/:id
// router.delete("/posts/:id", isLoggedIn, usersCtrl.delPost);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("./auth/google");
}

module.exports = router;

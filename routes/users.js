var router = require("express").Router();
const usersCtrl = require("../controllers/users");

// GET /newScore
router.get("/users/new", isLoggedIn, usersCtrl.new);

router.get("/users/myscores", isLoggedIn, usersCtrl.myScore);
// POST /scores
router.post("/", isLoggedIn, usersCtrl.create);

// GET /users
router.get("/users", usersCtrl.index);

router.get("/", usersCtrl.index);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;

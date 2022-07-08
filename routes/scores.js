var router = require("express").Router();
const scores = require("../controllers/scores");
const scoresCtrl = require("../controllers/scores");

// GET /all scores
router.get("/", scoresCtrl.index);

// GET New Score
router.get("/new", isLoggedIn, scoresCtrl.new);

// POST new scores
router.post("/", isLoggedIn, scoresCtrl.create);

// GET New Score
router.get("/myscores", isLoggedIn, scoresCtrl.myScores);

// GET Score Detail
router.get("/scores/:id", isLoggedIn, scoresCtrl.show);

// GET My Score Detail
router.get("/myscores/:id", isLoggedIn, scoresCtrl.showMyScores);

// DELETE Score
router.delete("/myscores/:id", isLoggedIn, scoresCtrl.delete);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;

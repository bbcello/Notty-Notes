var router = require("express").Router();
const scoresCtrl = require("../controllers/scores");

// GET /all scores
router.get("/", scoresCtrl.index);

// GET New Score
router.get("/new", isLoggedIn, scoresCtrl.new);

// POST new scores
router.post("/", isLoggedIn, scoresCtrl.create);

// GET My Scores
router.get("/myscores/", isLoggedIn, scoresCtrl.myScores);

// GET Score Detail
router.get("/scores/:id", isLoggedIn, scoresCtrl.show);

// DELETE Score
router.delete("scores/:id", isLoggedIn, scoresCtrl.delete);

// PUT update
router.put("/myscores/:id", isLoggedIn, scoresCtrl.update);
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;

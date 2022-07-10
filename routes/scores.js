var router = require("express").Router();
const scoresCtrl = require("../controllers/scores");

// DELETE Score
router.delete("/myscores/:id", isLoggedIn, scoresCtrl.delete);

// GET /all scores
router.get("/", scoresCtrl.index);

// GET New Score
router.get("/new", isLoggedIn, scoresCtrl.new);

// GET My Scores
router.get("/myscores", isLoggedIn, scoresCtrl.myScores);

// GET Score Detail
router.get("/scores/:id", isLoggedIn, scoresCtrl.show);
// POST new scores
router.post("/", isLoggedIn, scoresCtrl.create);

// PUT update
router.put("/myscores/:id", isLoggedIn, scoresCtrl.update);
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;

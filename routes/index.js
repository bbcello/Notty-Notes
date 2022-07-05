var router = require("express").Router();
var passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("./users/index", { title: "Notty Notes" });
});

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/users",
    failureRedirect: "/users",
  })
);

// Logging out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/users");
});

module.exports = router;

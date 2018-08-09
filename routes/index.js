var express             = require("express"),
    User                = require("../models/user"),
    campground          = require("../models/campground"),
    passport            = require("passport"),
    router              = express.Router();

//Root route
router.get("/", function(req, res){
   res.render("landing");
});

//Show register form
router.get("/register", function(req, res){
   res.render("register") ;
});

//handle sign up logic
router.post("/register", function(req, res) {
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
        req.flash("error", err.message);
        return res.redirect("register");
    }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to the Campgrounds " + user.username);
            res.redirect("/campgrounds");
        })
    });
});

//show login form
router.get("/login", function(req, res) {
   res.render("login"); 
});

//hande login logic(middleware)
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"    
    }), function(req, res) {
});

//logout route
router.get("/logout", function(req, res) {
   req.logout();
   req.flash("success", "Logged you out!");
   res.redirect("/campgrounds");
});

module.exports = router;
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://www.photosforclass.com/download/pixabay-2825197?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Feb3db30a29fd063ed1584d05fb1d4e97e07ee3d21cac104496f2c57ca7eeb3b0_960.jpg&user=Tommy_Rau"},
        {name: "Granite Hill", image: "https://www.photosforclass.com/download/pixabay-3406137?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fea31b10929f7063ed1584d05fb1d4e97e07ee3d21cac104496f2c57ca7eeb3b0_960.jpg&user=lukasbieri"},
        {name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/pixabay-1892494?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db80d2cfd053ed1584d05fb1d4e97e07ee3d21cac104496f2c57ca7eeb3b0_960.jpg&user=12019"},
        {name: "Salmon Creek", image: "https://www.photosforclass.com/download/pixabay-2825197?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Feb3db30a29fd063ed1584d05fb1d4e97e07ee3d21cac104496f2c57ca7eeb3b0_960.jpg&user=Tommy_Rau"},
        {name: "Granite Hill", image: "https://www.photosforclass.com/download/pixabay-3406137?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fea31b10929f7063ed1584d05fb1d4e97e07ee3d21cac104496f2c57ca7eeb3b0_960.jpg&user=lukasbieri"},
        {name: "Mountain Goat's Rest", image: "https://www.photosforclass.com/download/pixabay-1892494?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db80d2cfd053ed1584d05fb1d4e97e07ee3d21cac104496f2c57ca7eeb3b0_960.jpg&user=12019"}
    ]

app.get("/", function(req, res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
   res.render("campgrounds", {campgrounds:campgrounds});
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs") 
});

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name , image: image}
    campgrounds.push(newCampground);
    
    //redirect back to campground page
    res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Campgrounds Server has started.");
});
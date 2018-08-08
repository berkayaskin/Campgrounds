COMMIT NOTES DAILY

FIRST DAY - FIRST COMMIT
Date: 25 July 2018
SECTION 26 - BASICS

* INITIAL ROUTES

1. Started with “npm init” to create package.json. 
2. “npm install express ejs —save”
3. app.js declerations & configurations such as require, routes, app.set("view engine", "ejs"); 
4. Add landing page
5. Add campgrounds page that lists all campgrounds. Each Campground has name and image

* LAYOUT AND BASIC STYLING

1. Create header and footer partials
2. Add in Bootstrap

* CREATING CAMPGROUNDS

1. Setup new campground POST route
2. Add in body-parser
3. Setup route to show form
4. Add basic unstyled form

* STYLE THE CAMPGROUNDS PAGE

1. Add a better header/title (jumbotron)
2. Make campgrounds display in a grid

* STYLE THE NAVBAR AND FORM

1. Add a navbar to all templates
2. Style the new campground form

SECOND COMMIT
Date: 27 July 2018
SECTION 28: DATA PERSISTANCE

* ADDING MONGOOSE

1. Install and configure mongoose
2. Setup campground model
3. Use campground model inside of our routes

Date: 28 July 2018
* SHOW PAGE

1. Add description to our campground model
2. Show db.collection.drop()
3. Add a show route/template

-----------TAKE A BREAK FOR RESTFULBLOGAPP PROJECT-----------

THIRD COMMIT
Date: 02 August  2018
SECTION 31: COMMENTS

* REFACTOR MONGOOSE CODE

1. Create a models directory
2. Use module.exports
3. Require everything correctly

* ADD SEEDS FILE

1. Add a seeds.js file
2. Run the seeds file every time the server starts

* ADD THE COMMENT MODEL
1. Handle the errors
2. Display comments on campground show page
 
Date: 03 August 2018
* COMMENT NEW/CREATE
1. Add the comment, new and create routes(nested routes)
2. Add the new comment form

Date: 06 August 2018
* STYLE SHOW PAGE
1. Add sidebar to show page
2. Styling display comments 

FOURTH COMMIT
Date: 08 August 2018
SECTION 33: ADDING AUTHENTICATION

* AUTH PT. 1 - ADD USER MODEL
1. Install all packages for auth(passport.js)
2. Define User model

* AUTH PT. 2 - REGISTER
1. Configure Passport
2. Add register routes
3. Add register template

* AUTH PT. 3 - LOGIN
1. Add login routes
2. Add login template

* AUTH PT. 4 - LOGOUT/NAVBAR
1. Add logout route
2. Prevent user from adding a comment if not signed in
3. Add links to navbar
4. Show/hide auth links correctly

* AUTH PT.5 - SHOW/HIDE LINKS
1. Show/hide auth links in navbar correctly
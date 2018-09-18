DAILY COMMIT NOTES

FIRST DAY - FIRST COMMIT
Date: 25 July 2018
SECTION 26 - BASICS

-   INITIAL ROUTES

# 257. Yelpcamp: Initial Routes - 14:20 & https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861630?start=0

1. Started with “npm init” to create package.json.
2. “npm install express ejs —save”
3. app.js declerations & configurations such as require, routes, app.set("view engine", "ejs");
4. Add landing page
5. Add campgrounds page that lists all campgrounds. Each Campground has name and image

-   LAYOUT AND BASIC STYLING

# 258. 5:45 & https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861632?start=0

1. Create header and footer partials
2. Add in Bootstrap

-   CREATING CAMPGROUNDS

# 259. 12:38 & https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861636?start=0

1. Setup new campground POST route
2. Add in body-parser
3. Setup route to show form
4. Add basic unstyled form

-   STYLE THE CAMPGROUNDS PAGE

# 261. 10:42 & https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861638?start=0

1. Add a better header/title (jumbotron)
2. Make campgrounds display in a grid

-   STYLE THE NAVBAR AND FORM

# 262. 10:42 & https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861640?start=0

1. Add a navbar to all templates
2. Style the new campground form

SECOND COMMIT
Date: 27 July 2018
SECTION 28: DATA PERSISTANCE

-   ADDING MONGOOSE

# 270. 15:42 & https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861650?start=0

1. Install and configure mongoose
2. Setup campground model
3. Use campground model inside of our routes

Date: 28 July 2018

-   SHOW PAGE

# 270. 10:20 - 11:02 & https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861652?start=0

1. Add description to our campground model
2. Show db.collection.drop()
3. Add a show route/template

-----------TAKE A BREAK FOR RESTFULBLOGAPP PROJECT-----------

THIRD COMMIT
Date: 02 August 2018
SECTION 31: COMMENTS

-   REFACTOR MONGOOSE CODE

# 290. 4:52 & https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861662?start=0

1. Create a models directory
2. Use module.exports
3. Require everything correctly

-   ADD SEEDS FILE

# 292. 12:28 & https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861664?start=0

1. Add a seeds.js file
2. Run the seeds file every time the server starts

-   ADD THE COMMENT MODEL

# 294. 11:45 & https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861666?start=0

1. Handle the errors
2. Display comments on campground show page

Date: 03 August 2018

-   COMMENT NEW/CREATE

# 296. 15:01 & https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861668?start=0

1. Add the comment, new and create routes(nested routes)
2. Add the new comment form

Date: 06 August 2018

-   STYLE SHOW PAGE

# 298. 13:43 & https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/3861670?start=0

1. Add sidebar to show page
2. Styling display comments

FOURTH COMMIT
Date: 08 August 2018
SECTION 33: ADDING AUTHENTICATION

-   AUTH PT. 1 - ADD USER MODEL

1. Install all packages for auth(passport.js)
2. Define User model

-   AUTH PT. 2 - REGISTER

1. Configure Passport
2. Add register routes
3. Add register template

-   AUTH PT. 3 - LOGIN

1. Add login routes
2. Add login template

-   AUTH PT. 4 - LOGOUT/NAVBAR

1. Add logout route
2. Prevent user from adding a comment if not signed in
3. Add links to navbar
4. Show/hide auth links correctly

-   AUTH PT.5 - SHOW/HIDE LINKS

1. Show/hide auth links in navbar correctly

FIFTH COMMIT
SECTION 34: CLEANING UP

-   REFACTOR THE ROUTES

1. Use Express router to reorganize all routes

-   USERS + COMMENTS

1. Associate users and comments
2. Save author's name to a comment automatically

-   USERS + CAMPGROUNDS

1. Prevent an unauthenticated user from creating a campground
2. Save username + id to newly created campground

SIXTH COMMIT
Date: 09 August 2018
SECTION 35 - UPDATE AND DESTROY

-   EDITING CAMPGROUNDS

1. Add Method-Override
2. Add Edit Route for Campgrounds
3. Add Link to Edit Page
4. Add Update Route
5. Fix $set problem

-   DELETING CAMPGROUNDS

1. Add Destroy Route
2. Add Delete button

-   AUTHORIZATION(PERMISSION) PT. 1: CAMPGROUNDS

1. User can only edit his/her campgrounds
2. User can only delete his/her campgrounds
3. Hide/Show edit and delete buttons

-   EDITING COMMENTS

1. Add Edit route for comments
2. Add Edit button
3. Add Update route

/campgrounds/:id/edit
/campgrounds/:id/comments/:comment_id/edit

-   DELETING COMMENTS

1. Add Destroy route
2. Add Delete button

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route: /campgrounds/:id/comments/:comment_id

-   AUTHORIZATION(PERMISSION) PT. 2: COMMENTS

1. User can only edit his/her comments
2. User can only delete his/her comments
3. Hide/Show edit and delete buttons
4. Refactor Middleware

SEVENTH COMMIT
SECTION 36: UI IMPROVEMENTS

-   Adding in Flash!

1. Demo working version
2. Install and configure connect-flash
3. Add bootstrap alerts to header
4. Flash Messages and landing page refactor
   ================ END OF THE PROJECT ================
   TODO LIST

-   CSS3 Background animation on landing page √
-   Authentication flash messages √
-   Dynamic price feature √
-   Fuzzy Search
-   Campground location with Google Maps
-   Campground cost
-   Display time since post was created with Moment JS
-   User profile
-   Password reset
-   Image upload with multer and cloudinary
-   Migration/upgrade instructions for Bootstrap 4
-   Refactor callbacks with Async/Await

EIGHTH COMMIT
Date: 14.08.2018
IMPROVEMENTS

1. Dynamic price feature
2.

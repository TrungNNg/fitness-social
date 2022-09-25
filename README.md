### Trung's Fitness Tracker App

## Main function
1. user registration & session authentication.
2. profile management
    + age, gender, weight, height
3. daily progess tracking
    + display graph
4. share progress on Twitter

## Tech stack
1. VueJS          : consume and display data
2. ExpressJS      : API
3. MongoDB Atlas  : remote database services

## Folder structure
database : database driver

api/register   : user registration
api/login      : user login
api/logout     : user logout
api/profile    : display user profile
api/edit       : edit user profile
api/dashboard  : main display

## Route
/ : home
/registration -> api/register

## Project Building Log
database.js is database folder is for defining Schema, export Model
public folder is for all resources that is accessible to anyone
routes folder currently contain api endpoint for login and profile
index.js currently export public html file, use middleware for
request body parsing, and connect to DB

## TODO
set up basic Express server [X]
learn how to use Expressjs with Vuejs [X]
basic home base [X]
build registration page [X]
build login page [X]
build route for login post, user creation post [X]
build login API [X]
build user creation API [X]
create and connect to MongoDB Atlas [X]

[X] define user table (collection)
[ ] send cookie to login user and have them send back
[ ] build logout api
[ ] document how to use Session authentication
[ ] defide user session
[ ] build registration API
[ ] build login API
[ ] build logout API
[ ] degsin basic dashboard
[ ] build basic dashboard
[ ] update folder structure section in README.md




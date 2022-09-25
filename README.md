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

## Project Planning Description
VueJS will handle routing and display.
backend is for API, database, and user auth
authentication using session

## TODO
set up basic Express server [X]
learn how to use Expressjs with Vuejs [X]
basic home base [X]
build registration page [X]
build login page [X]
build route for login post, user creation post [ ]
build login API [ ]

build logout API [ ]
create and connect to MongoDB [ ]
build user creation API [ ]

[ ] define user table (collection)
[ ] denide user session
[ ] build registration API
[ ] build login API
[ ] build logout API
[ ] degsin basic dashboard
[ ] build basic dashboard




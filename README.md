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

[X] added vuejs for frontend
[X] fix nav bar by adding vue router
[X] immplement simple login/ logout in vue 
[X] creat an array of task
[X] craete a tasklist component
[X] render all tasks in array to tasklist
[X] create 2 components login and register form
[X] access and display on dashboard view
[X] create a form to add task, remove task, edit task
[X] create user edit component
[X] create user exercise list component
[X] finish styling home page, login, logout, user edit, user exercise list
[X] edit exercise form
[X] create footer component
[X] deploy to render
[X] fix session user to non optional
[X] fix profile page type
[X] craete add exercise form
[X] create exercise component
[X] create table for database
[X] add type-check to package.json
[ ] re-deploy

[ ] add pinia a list of all task

[X] define user table (collection)
[X] read reqest and respose doc in ExpressJS
[X] watch CS 253 Stanford
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

## Problems

1. How to handle authentication
How to know if a user is logged in or not?
if user does not have valid cookie -> not logged in
if user have valid cookie -> logged in

what is a valid cookie? -> a cookie is valid if it is in session db
what information to send to the client and get back to know which
user is this? -> user _id . It ok to see, but what if client create 
cookie with random _id? -> only _id in session collection is valid.
how to know when to delete session? -> logout API. What if user do
not use logout? -> when user close browser, session cookie gone,
need to login again -> what if there is a seesion in db, and user
logged in again, there will be 2 session. -> solution: set expire 
for session in db. 

Procedure
for private route check if logged in or not. if not send to login
else display cookie data.
session db have hash: id + username hash with secret salt, id,
expire.
use salt to decode hash, use id to identify user.



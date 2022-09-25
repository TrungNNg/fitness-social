const express = require('express')
const router = express.Router()
const UserModel = require('../database/database.js')

// create a router middleware for login router
// if user is already login, take them backout
// TODO

router.post('/login',(req, res) => {
    // check matching username and password
    // create session
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === req.body.username && users[i].password == req.body.password) {
            user_session.push({name:users[i].name, time: "1"})
            // TODO send back cookie here
            return
        }
    }
    req.send('wrong username, wrong password, or both, or user not exsit, take a guess.')
})

router.get('/logout', (req, res) => {
    // check cookie get user, delete user session, clear cookie
})

router.post('/register', (req, res) => {
    UserModel.create({username:req.body.username, password:req.body.password})
    res.send('user created.')
})


module.exports = router
const express = require('express')
const router = express.Router()
const UserModel = require('../database/database.js')

// create a router middleware for login router
// if user is already login, take them backout
// TODO

router.post('/login',(req, res) => {
    // TODO
    // check if username and password match
    // send cookie back
})

router.get('/logout', (req, res) => {
    // TODO
    // check cookie get user, delete user session, clear cookie
})

router.post('/register', (req, res) => {
    // TODO: check if user is created yet.
    UserModel.create({username:req.body.username, password:req.body.password})
    res.send('user created.')
})


module.exports = router
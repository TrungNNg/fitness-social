const express = require('express')
const router = express.Router()

// testing db
const userModule = require('../test_db/test_db.js')
const user = userModule.user
const user_session = userModule.user_session

router.post('/login',(req, res) => {
    console.log(user)
    console.log(user_session)
    res.send("POST domain/login") 
})

router.post('register', (req, res) => {
    res.send("POST domain/register")
})


module.exports = router
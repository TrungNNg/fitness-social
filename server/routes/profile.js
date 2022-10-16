const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log("hit 1 time")
    next()
})

router.get('/profile', (req, res) => {
    res.send('/profile GET')
})

module.exports = router
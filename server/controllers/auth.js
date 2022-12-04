const express = require('express');

const {getAllUser} = require('../models/profile')

const app = express.Router();

// TODO handle auth later, just work on profile page first
app.post('/', (req, res) => {
    console.log(req.body)
})

module.exports = app
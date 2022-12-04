const express = require('express');

const {login_user, add_user} = require('../models/profile')

const app = express.Router();

// register user
app.post('/register', (req, res, next) => {
    add_user(req.body)
        .then(x => res.status(200).send(x))
        .catch(next)
})

// send all user to frontend
app.post('/login', (req, res, next) => {
    login_user(req.body)
        .then(x => res.status(200).send(x))
        .catch(next)
})

module.exports = app
const express = require('express');

const {login_user, add_user} = require('../models/profile')

const app = express.Router();

// register user
app.post('/register', (req, res, next) => {
    add_user(req.body)
        .then(x => res.status(200).send(x))
        .catch(next)
})

// return user with match login and password
// if no math return empty user
app.post('/login', (req, res, next) => {
    login_user(req.body)
        .then(x => {
            if (x) {
                res.status(200).send(x)
            } else {
                res.status(400).send({id:'',username:'',password:'',bio:'',picture:'',friends:[]})
            }
        })
        .catch(next)
})

module.exports = app
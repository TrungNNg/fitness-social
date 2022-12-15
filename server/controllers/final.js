const express = require('express');
const { ObjectId } = require('mongodb');
const { searchUser } = require('../models/profile');

const app = express.Router();

app.post('/', (req, res, next) => {
    searchUser(req.body.username).then( x => res.status(200).send(x))
})

module.exports = app;
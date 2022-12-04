const express = require('express');
const { get_all_post, add_post, delete_post, like_post } = require('../models/exercise');
const app = express.Router();

// return list of all post of this user and friend
app.get('/:userID', (req, res) => {
    res.send(get_all_post(+req.params.userID))
})

module.exports = app
const express = require('express');
const { get, update_user_info, add_friend, remove_friend, update_picture } = require('../models/profile');

const app = express.Router();

// return user object that match with id, or undefined or no match id
app.get('/:userId', (req, res) => {
    res.send(get(+req.params.userId));
});

// update user's username, password, email, bio
app.post('/:userID/', (req, res) => {
    res.send(update_user_info(+req.params.userID, req.body))
})

// add to friend list
app.patch('/:userID/:id', (req, res) => {
    res.send(add_friend(+req.params.userID, +req.params.id))
})

// remove from friend list
app.delete('/:userID/:id', (req, res) => {
    res.send(remove_friend(+req.params.userID, +req.params.id))
})

// update profile picture
app.patch('/:userID/picture/:link', (req, res) => {
    res.send(update_picture(+req.params.userID, req.params.link))
})

module.exports = app;
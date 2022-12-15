const express = require('express');
const { ObjectId } = require('mongodb');
const {update_user_info, remove_friend, get_user, get_all_users} = require('../models/profile');

const app = express.Router();

// get all user
app.get('/', (req, res, next) => {
    get_all_users().then(x => res.status(200).send(x))
    .catch(next)
})

// remove friend
app.delete('/:userID/:id', (req, res, next) => {
    remove_friend(ObjectId(req.params.userID), ObjectId(req.params.id))
        .then( x => {
            if (x.acknowledged) {
                res.status(200).send('delete friend')
            } else {
                res.status(404).send('can not delete friend')
            }
        })
        .catch(next)
})

// GET get user by objectId
app.get('/:userId', (req, res, next) => {
    get_user(ObjectId(req.params.userId))
        .then( user => {
            if (user) {
                res.status(200).send(user)
            } else {
                res.status(404).send('user not found')
            }
        })
        .catch(next)
})

// POST update user info
app.post('/:userId', (req, res, next) => {
    update_user_info(ObjectId(req.params.userId), req.body)
    .then(x => {
        if (x.acknowledged) {
            res.status(200).send('updated')
        } else {
            res.status(404).send('can not update')
        }
    })
    .catch(next)
})

module.exports = app;
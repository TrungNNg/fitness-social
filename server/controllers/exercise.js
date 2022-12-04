const express = require('express');
const { ObjectId } = require('mongodb');
const {add_post, display_post, delete_post, like_post} = require('../models/exercise');
const app = express.Router();

// user post a exercise post
app.post('/', (req, res, next) => {
    req.body.userId = ObjectId(req.body.userId)
    add_post(req.body)
        .then(result => {
            if (result.insertedId) {
                res.status(200).send('added post')
            } else {
                res.status(400).send('can not add post')
            }
        })
        .catch(next)
})

// return list of all post for a user
app.get('/:userId', (req, res, next) => {
    display_post(ObjectId(req.params.userId))
        .then(x => res.status(200).send(x))
        .catch(next)
})

// delete a post using post id
app.delete('/:postId', (req, res, next) => {
    delete_post(ObjectId(req.params.postId))
        .then( x => res.status(200).send(x))
        .catch(next)
})

// like a post using post id
app.patch('/:postId', (req, res, next) => {
    like_post(ObjectId(req.params.postId))
        .then(x => res.status(200).send(x))
        .catch(next)
})

module.exports = app
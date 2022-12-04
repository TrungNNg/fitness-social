const { connect } = require('./mongo');

async function collection(){
    const client = await connect();
    return client.db('production').collection('post');
}

// add post, post is {userId:ObjectId ,image:"link", caption:""}
async function add_post(post) {
    const db = await collection()
    return await db.insertOne({...post, like:0})
}
// return a user's post
async function display_post(userId) {
    const db = await collection()
    return await db.find({userId:userId}).toArray()
}

// delete post
// TODO: make sure a user can only delete their post
async function delete_post(postId) {
    const db = await collection()
    return await db.deleteOne({_id:postId})
}

// like post
// TODO: a user can only like a post once
async function like_post(postId) {
    const db = await collection()
    return await db.updateOne({_id:postId}, {$inc:{like:1}})
}

module.exports = {add_post, display_post, delete_post, like_post}
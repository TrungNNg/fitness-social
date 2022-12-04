const profile = require('../testDB/profile.json')
const { connect } = require('./mongo');

async function collection(){
    const client = await connect();
    return client.db('production').collection('user');
}

async function get_all_users() {
    const db = await collection();
    const data = await db.find().toArray()
    return data
}

async function get_user(userId) {
    const db = await collection()
    const data = await db.findOne({_id:userId})
    return data
}

// data is object contain all field need to update
// { username:"", password:"", }
async function update_user_info(userId, data) {
    const db = await collection()
    return await db.updateOne(
        {_id:userId}, 
        {$set:data}
    )
}

// remove friend to current user id
async function remove_friend (userID, friend_id) {
    const db = await collection()
    return await db.updateOne(
        {_id:userID},
        {$pull: {friends : friend_id}}
    )
}

module.exports = { update_user_info, remove_friend, get_user}
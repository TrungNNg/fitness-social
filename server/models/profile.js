const { connect } = require('./mongo');

async function collection(){
    const client = await connect();
    return client.db('production').collection('user');
}

async function get_all_users() {
    const db = await collection();
    return await db.find().toArray()
}

//###### get_all_users and add_user is for login and register 
async function login_user(data) {
    const db = await collection();
    const result = await db.findOne({username:data.username, password:data.password})
    console.log(result)
    return result
}
// user is object {username: "", password: ""}
async function add_user(user) {
    const db = await collection()
    return await db.insertOne({...user, bio:"", picture:"", friends:[]})
}
//#####

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

module.exports = { update_user_info, remove_friend, get_user, login_user, add_user, get_all_users}
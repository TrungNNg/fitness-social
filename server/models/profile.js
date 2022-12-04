const profile = require('../testDB/profile.json')

// return user object or undefined if no id match
const get = (userId) => {
    return profile.find(user => user.id === userId)
}

const getAllUser = () => {
    return profile
}

// update user data base on 2 param ID, field and 1 json body for data
const update_user_info = (userID, new_data) => {
    const index = profile.findIndex((user) => user.id === userID);
    profile[index].username = new_data.username
    profile[index].password = new_data.password
    profile[index].bio = new_data.bio
    return profile[index]
}

// add friend to current user id
const add_friend = (userID, friend_id) => {
    const index = profile.findIndex((user) => user.id === userID);
    profile[index].friends.push(friend_id)
    return profile[index]
}

// remove friend from current user id
const remove_friend = (userID, friend_id) => {
    const index = profile.findIndex((user) => user.id === userID);
    const friend_index = profile[index].friends.findIndex( (id) => id === friend_id)
    if (friend_index === -1) {
        return {error : "no friend with given id"}
    }
    profile[index].friends.splice(friend_index, 1)
    return profile[index]
}

// update profile picture
const update_picture = (userID, link) => {
    const index = profile.findIndex((user) => user.id === userID);
    profile[index].picture = link
    return profile[index]
}

module.exports = {get, getAllUser, update_user_info, add_friend, remove_friend, update_picture}
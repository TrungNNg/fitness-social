const exercise = require('../testDB/exercise.json')
const profile = require('../testDB/profile.json')

// return list of all user post
const get_all_post = (userID) => {
    let user_posts = exercise.filter( (post) => post.id === userID)
    const user_index = profile.findIndex((user) => user.id === userID);
    for (let i = 0; i < profile[user_index].friends.length; i++) {
        user_posts = user_posts.concat(exercise.filter((post) => post.id === profile[user_index].friends[i]))
    }
    return user_posts
}

// add post
const add_post = () => {

}

// delete post
const delete_post = () => {

}

// like post
const like_post = () => {

}

module.exports = {get_all_post, add_post, delete_post, like_post}
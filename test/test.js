const userModule = require('../test_db/test_db.js')
const users = userModule.users
const user_session = userModule.user_session

for (i = 0; i < users.length; i++) {
    console.log(users[i].name)
    console.log(user_session)
}

console.log(users)
users.push({name:"Sam", password:"3"})
console.log(users)
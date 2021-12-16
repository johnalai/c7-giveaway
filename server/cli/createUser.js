const User = require('../models/user')

console.log('Creating a user!')

const username = process.argv[2]
const password = process.argv[3]
const userclass = process.argv[4]
const user = {
    username,
    password,
    userclass
}

console.log('Creating user', user)

User.createUser(user).then((userId) => {
    console.log("created user with id", userId)
})
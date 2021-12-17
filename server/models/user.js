const mongoose = require('./mongooseDb')

const User = mongoose.model('User', {
    "username": String, 
    "password":String,
    "address": String,
    "city": String,
    "pickUpSpot": String,
    "products": [String], 
    "contact": String,
    "pickupTime":String,
    "message":String,
    "available":String,
    "user":String,
})

async function createUser(userData) {
    let newUser = new User(userData)
    let createdUser = await newUser.save()
    return createdUser.id
}

async function findUserByUsername(username) {
    return User.findOne({ username })
}

async function listUsers() {
    return User.find({})
}

async function findById(id) {
    let fullUserRecord = await User.findById(id)
    let userToReturn = {
        id: fullUserRecord.id,
        username: fullUserRecord.username,
        address: fullUserRecord.address,
        city: fullUserRecord.city,
        pickUpSpot: fullUserRecord.pickUpSpot,
        products: fullUserRecord.products,
        contact: fullUserRecord.contact,
        pickupTime: fullUserRecord.pickupTime,
        message: fullUserRecord.message,
        message: fullUserRecord.message,
        available: fullUserRecord.available,
        user: fullUserRecord.user,
    }
    return userToReturn
}


async function deleteUser(id) {
    return User.findByIdAndDelete(id)
}



//giveAwayRoutes

async function update(id, newProviderData) {
    return User.findByIdAndUpdate(id, newProviderData, {
        returnDocument: "after"
    })
}
async function listGiveAways(param) {
    return GiveAway.find(param)
}

module.exports = {
    createUser,
    listUsers,
    findById,
    deleteUser,
    findUserByUsername,
    update,
    listGiveAways
}

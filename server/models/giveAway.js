const mongoose = require('./mongooseDb')

const GiveAway = mongoose.model('GiveAway', 
    {
        "providerName": String, 
        "address": String,
        "city": String,
        "pickUpSpot": String,
        "products": [String], 
        "contact": String
    }
)

async function createGiveAway(giveAwayData) {
    let newGiveAway = new GiveAway(giveAwayData)
    let createdGiveAway = await newGiveAway.save()
    return createdGiveAway.id
}

async function listGiveAways() {
    return GiveAway.find({})
}

async function findById(id) {
    return GiveAway.findById(id)
}

async function update(id, newProviderData) {
    return GiveAway.findByIdAndUpdate(id, newProviderData, {
        returnDocument: "after"
    })
}

async function deleteGiveAway(id) {
    return GiveAway.findByIdAndDelete(id)
}
module.exports = {
    createGiveAway,
    listGiveAways,
    findById,
    update,
    deleteGiveAway
}
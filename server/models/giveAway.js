const mongoose = require('./mongooseDb')

const GiveAway = mongoose.model('GiveAway', 
    {
        "providerName": String, 
        "address": String,
        "city": String,
        "pickUpSpot": String,
        "products": [String], 
        "contact": String,
        "availible":String
    }
)

async function createGiveAway(giveAwayData) {
    let newGiveAway = new GiveAway(giveAwayData)
    let createdGiveAway = await newGiveAway.save()
    return createdGiveAway.id
}

async function listGiveAways(param) {
    return GiveAway.find(param)
}

async function findById(id) {
    return GiveAway.findById(id)
}

async function update(id, newProviderData) {
    return GiveAway.findByIdAndUpdate(id, newProviderData, {
        returnDocument: "after"
    })
}
module.exports = {
    createGiveAway,
    listGiveAways,
    findById,
    update
}
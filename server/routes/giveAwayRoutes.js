
const express = require('express')
const router = express.Router()

const giveAwayModel = require('../models/giveAway')

const mustBeLoggedIn = async (req, res, next) => {
    console.log (req.user)
    if (req.user && (req.user.userclass === "Agent" || req.user.userclass === "Provider"  )) {
        next()
        return
    }
    res.sendStatus(401)
}

router.get('/giveAway', async (req, res) => {
    let giveAwayList = await giveAwayModel.listGiveAways()
    res.send(giveAwayList)
})

router.post('/giveAway', mustBeLoggedIn, async (req, res) => {
    let newProvider = req.body
    let createdId = await giveAwayModel.createProvider(newProvider)
    res.send(createdId)
})

router.get('/giveAway/:id', async (req, res) => {
    let id =req.params.id
    let provider = await giveAwayModel.findById(id)
    res.send(provider)
})

router.post('/giveAway/:id', mustBeLoggedIn, async (req, res) => {
    let id =req.params.id
    let updatedProvider = req.body
    console.log("updating provider", id, "with", updatedProvider)
    let provider = await giveAwayModel.update(id, updatedProvider)
    res.send(provider)
})

router.delete('/giveAway/:id', mustBeLoggedIn, async (req, res) => {
    let id = req.params.id
    console.log('deleting provider', id)
    let deletedGiveAway = await giveAwayModel.deleteGiveAway(id)
    res.send(deletedGiveAway)
})


module.exports = router

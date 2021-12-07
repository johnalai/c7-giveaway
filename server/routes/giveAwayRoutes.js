
const express = require('express')
const router = express.Router()

const giveAwayModel = require('../models/giveAway')

router.get('/admin',async (req,res) => {
    let giveAwayList = await giveAwayModel.listGiveAways({})
    res.send(giveAwayList)
})

router.get('/giveAway', async (req, res) => {
    let giveAwayList = await giveAwayModel.listGiveAways({availible:true})
    res.send(giveAwayList)
})

router.post('/giveAway', async (req, res) => {
    let newProvider = req.body
    let createdId = await giveAwayModel.createGiveAway(newProvider)
    res.send(createdId)
})

router.get('/giveAway/:id', async (req, res) => {
    let id =req.params.id
    let provider = await giveAwayModel.findById(id)
    res.send(provider)
})

router.post('/giveAway/:id', async (req, res) => {
    let id =req.params.id
    let updatedProvider = req.body
    console.log("updating provider", id, "with", updatedProvider)
    let provider = await giveAwayModel.update(id, updatedProvider)
    res.send(provider)
})


module.exports = router

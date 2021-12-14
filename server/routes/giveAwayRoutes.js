
const express = require('express')
const router = express.Router()

const giveAwayModel = require('../models/giveAway')

router.get('/admin',async (req,res) => {
    let giveAwayList = await giveAwayModel.listGiveAways({})
    res.send(giveAwayList)
})
//provider is a list with element user:provider && availible
router.get('/provider', async (req, res) => {
    console.log('the details list is being requested by',req.user)
    let giveAwayList = await giveAwayModel.listGiveAways({available:true, user:"provider"})
    res.send(giveAwayList)
})
//provider is a list with element user:provider
router.get('/provider/:id', async (req, res) => {
    let id =req.params.id
    let provider = await giveAwayModel.findById(id)
    res.send(provider)
})
//volunteer is a list with element user:volunteer
router.get('/volunteer', async (req, res) => {
    let giveAwayList = await giveAwayModel.listGiveAways({user:"volunteer"})
    res.send(giveAwayList)
})
router.get('/volunteer/:id', async (req, res) => {
    let id =req.params.id
    let provider = await giveAwayModel.findById(id)
    res.send(provider)
})
//giveAway is a list of all users
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

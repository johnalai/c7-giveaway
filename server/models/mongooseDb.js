const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost:27017/giveAways'
mongoose.connect(dbUrl)

module.exports = mongoose

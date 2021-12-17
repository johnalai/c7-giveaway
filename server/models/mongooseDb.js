const mongoose = require('mongoose')

const dbUrl = process.env.MONGO_URL ||'mongodb+srv://admin:SJ3Ds8LHFZozsNx9@cluster0.4lbgz.mongodb.net/giveAways?retryWrites=true&w=majority' || 'mongodb://localhost:27017/giveAways'
mongoose.connect(dbUrl)

module.exports = mongoose

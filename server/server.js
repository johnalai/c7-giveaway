const express = require('express')
const giveAwayRoutes = require('./routes/giveAwayRoutes')

const app = express()
const port = 5000

app.use(express.json())

app.use('/api',giveAwayRoutes)
app.use('/', express.static('../client/build'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


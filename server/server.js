const express = require('express')
const session = require("express-session")
const passport = require('passport')

const giveAwayRoutes = require('./routes/giveAwayRoutes')
const authRoutes = require ("./routes/auth")

const app = express()
const port = 5000


// app.use(session({ secret: "cats" }))
app.use(session({
  secret: "cats",
  name: "cookie_name",
  store: "sessionStore", // connect-mongo session store
  proxy: true,
  resave: true,
  saveUninitialized: true
}));


app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

app.use('/api',giveAwayRoutes)
app.use('/auth',authRoutes)

app.use('/', express.static('../client/build'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


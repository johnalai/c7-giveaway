const express = require('express')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user')

const router = express.Router()

passport.use(new LocalStrategy(
    function(userName, password, done) {
        console.log('Passport is trying to verify a user', userName)
        User.findUserByUsername(userName)
        .then((user) => {
            if (!user || (user.password !== password)) {
                done(null, false, {message: 'Username not found or password mismatch'})
                return
            }
            done(null, user)
        })
        .catch(done)
    }
))
    
passport.serializeUser(function(user, done) {
    console.log('passport wants to store this user in a cookie', user)
    done(null, user.id)
})
  
passport.deserializeUser(function(id, done) {
    console.log('passport is trying to recover the user from the cookie', id)
    User.findById(id)
    .then((user) => {
        if (!user) {
            done(new Error('User not found or deleted'))
            return
        }
        done(null, user);
    })
    .catch(done)
});
router.post('/register', async (req, res) => {
    let newUser = req.body
    let createdId = await User.createUser(newUser)
    res.send(createdId)
})

router.post('/login', passport.authenticate('local'), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  console.log('User login has succeeded!')
  console.log('Req.user is', req.user)
  res.sendStatus(200)
})

router.get('/loggedInUser', function(req, res) {
    console.log("GIT")
    res.send(req.user)
})

module.exports = router
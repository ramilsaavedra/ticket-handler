const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controllers/userController')

router.post(registerUser, (req, res) => {
  res.send('Register Route')
})

router.post(loginUser, (req, res) => {
  res.send('Login Route')
})

module.exports = router

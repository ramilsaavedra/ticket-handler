// @desc Register a new user
// @route /api/users
// @access Public
const registerUser = (req, res) => {
  console.log(req.body)

  res.send('Regiter Route')
}

// @desc Login user
// @routes /api/users/login
// @access Public
const loginUser = (req, res) => {
  res.send('Login Route')
}

module.exports = {
  registerUser,
  loginUser,
}

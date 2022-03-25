const registerUser = (req, res) => {
  res.send('Regiter Route')
}

const loginUser = (req, res) => {
  res.send('Login Route')
}

module.exports = {
  registerUser,
  loginUser,
}

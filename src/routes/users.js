const express = require('express')
const router = express.Router()

const users = []

router.post('/', (req, res) => {
  const { name, email } = req.body
  // Missing validation: name and email can be anything, including undefined
  const user = { id: users.length + 1, name, email }
  users.push(user)
  res.status(201).json(user)
})

router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id))
  // Missing validation: no check that id is a valid number
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json(user)
})

module.exports = router

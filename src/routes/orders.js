const express = require('express')
const router = express.Router()

const orders = []

router.post('/', (req, res) => {
  const { userId, item, quantity } = req.body
  // Missing validation: quantity could be negative or zero
  // Missing validation: item could be empty string
  const order = { id: orders.length + 1, userId, item, quantity }
  orders.push(order)
  res.status(201).json(order)
})

router.get('/:id/total', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id))
  if (!order) return res.status(404).json({ error: 'Order not found' })
  const pricePerItem = 9.99
  const total = pricePerItem * order.quantity
  res.json({ total })
})

module.exports = router

const express = require('express')
const router = express.Router()

const products = [
  { id: 1, name: 'Widget', price: 9.99 },
  { id: 2, name: 'Gadget', price: 24.99 },
  { id: 3, name: 'Doohickey', price: 4.99 },
]

// Missing validation: no check that q param exists
router.get('/', (req, res) => {
  const { q } = req.query
  const results = products.filter(p => p.name.toLowerCase().includes(String(q).toLowerCase()))
  res.json(results)
})

module.exports = router

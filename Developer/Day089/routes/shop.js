const express = require('express')
const router = express.Router()

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
  res.send('Shop home page')
})

// GET method route
router.get('/about', (req, res) => {
  res.send('About shop')
})




module.export = router
const express = require('express')
const router = express.Router()

// respond with "hello world" when a GET request is made to the homepage
router.get('/', (req, res) => {
  res.send('hello world')
})

// GET method route
router.get('/about', (req, res) => {
  res.send('About blog')
})

// GET method route
router.get('/blogpost/:slug', (req, res) => {
  res.send('fetch the blogpost for ${req.params.slug}')
})

// POST method route
router.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

router.all('/secret', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})


module.export = router
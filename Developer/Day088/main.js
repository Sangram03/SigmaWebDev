const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))




// app.get or app.post or app.put or app.delete(path ,handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => {
  res.send('Hello About!')
})


app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.get('/blog', (req, res) => {
  res.send('Hello Blog!')
})

app.get('/blog:slug/:second', (req, res) => {
    // logic to fetch intro to {slug} from the db
    console.log(req.params); // will output {slug :' intro-to-padosi '}
    console.log(req.query);  // will output {mode :'dark' , region:'in'}
    
  res.send(`Hello !${req.params.slug} and ${req.params.second}`)
})


// app.get('/blog/intro-to-js', (req, res) => {
//      logic to fetch intro to js from the db
//   res.send('Hello JavaScript!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//      logic to fetch intro to python from the db
//   res.send('Hello JavaScript!')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

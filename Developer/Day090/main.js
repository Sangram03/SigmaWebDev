const express = require('express')
const app = express()
const port = 3000
const fs = require ("fs")

// app.use(express.static("public"))

const blog = require ("./routes/blog")


app.use('/blog',blog)




// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers);
    req.harry = "I am harry bhai";
    
    fs.appendFileSync("logs.txt\n",`${Date.now()} is a ${req.method}`)
  console.log(`${Date.now()} is a ${req.method}`)
  res.send("Hecked by Middleware 1")
//   next()
})

// Middleware 2
app.use((req, res, next) => {
  console.log('m2')
  next()
})





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!' + req.harry)
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

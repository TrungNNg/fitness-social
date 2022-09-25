const express = require('express')
const app = express()
const port = 3000
const LoginRouter = require('./routes/login')

// Middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(LoginRouter)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html') // send home page
})



// to handle invalid route, create a 404 page, 
// use app.get('*', 404.html). Need to pust this route last

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
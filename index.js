const express = require('express')
const app = express()
const port = 3000
const LoginRouter = require('./routes/login')
const ProfileRouter = require('./routes/profile')

// Middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html') // send home page
})

app.use(LoginRouter)
app.use(ProfileRouter)



// to handle invalid route, create a 404 page, 
// use app.get('*', 404.html). Need to pust this route last

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
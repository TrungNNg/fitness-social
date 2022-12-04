const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// import profile route
const profile_controller = require('./controllers/profile')
// import auth route
const auth_controller = require('./controllers/auth')
// import exercise post route
const exercise_controller = require('./controllers/exercise')

app.use((req, res, next) => {;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/', express.static('../client/dist'));

app.use(express.json());

// register profile route
app.use('/profile', profile_controller)
// register auth route
app.use('/auth', auth_controller)
// register exercise route
app.use('/post', exercise_controller)

/*
app.get('/exercise', (req, res) => {
    res.send(exercise_data)
})*/

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: '../client/dist'});
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status( err.httpCode ?? 500).send({
        message: err.message ?? 'Something went wrong',
        status: err.httpCode ?? 500
    });
})

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
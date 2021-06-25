const express = require('express');
const expressHbs = require('express-handlebars');
const fs = require('fs');
const path = require('path');
const users = require('./users.json');

const app = express();
const static = path.join(__dirname, 'static');

let user;

app.engine('.hbs', expressHbs({
    defaultLayout: false,
}));

app.set('view engine', '.hbs');
app.set('views', static);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(static));

// home
app.get('/', (req, res) => {
    res.render('home');
})

// reg
app.get('/reg', (req, res) => {
    res.render('reg');
})
app.post('/reg', (req, res) => {
    const userData = req.body;
    const itsTrue = !!users.find(user => user.email === userData.email);

    if (itsTrue) {
        res.redirect('/errorReg')
        return;
    }

    users.push(userData);
    fs.writeFile('./users.json', JSON.stringify(users), () => {});

    res.json('You are registered successfully!');
})

// errorReg
app.get('/errorReg', (req, res) => {
    res.render('errorReg');
})

// login
app.get('/login', (req, res) => {
    res.render('login');
})
app.post('/login', (req, res) => {
    const userData = req.body;
    user = users.find(user => (user.email === userData.email && user.password === userData.password))

    if (!!user) {
        res.redirect('/user');
        return;
    }

    res.redirect('/errorLog');
})

// errorLog
app.get('/errorLog', (req, res) => {
    res.render('errorLog');
})

// user
app.get('/user', (req, res) => {
    res.render('user', {user});
})

// users
app.get('/users', (req, res) => {
    res.render('users', {users});
})

app.listen(3000, () => {
    console.log('App listen 3000');
})
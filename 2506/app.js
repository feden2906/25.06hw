const express = require('express');

const usersRouter = require('./routes/users.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', usersRouter);

app.listen(3100, () => {
    console.log('App listen 3100');
})
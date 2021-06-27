const express = require('express');

const {loginRouter, usersRouter} = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.listen(3100, () => {
    console.log('App listen 3100');
})
/* Вам потрібно реалізувати мінімум 3 строрінки.
1) Реєстрація
2) Логінація.
3) Список всіх юзерів.

Створити файлик з юзерами, який буде виступати в ролі бази данних.

При реєстрації юзер вводин логін та пороль і ви його данні дописуєте у файлик.
Якщо такий мейл вже є, то видаємо помилку.

При логінації юзер так само ввоить мейл та пароль і вам необхідно знайти юзера в файлі. Якщо такий мейлик з таким паролем є, 
то привіти юзера на платформі показати інформацію про нього та кнопочку, яка перекине нас на список всіх юзерів.
В інакшому випадку сказати, що необхідно реєструватись.

І відображення всіх юзерів це відповідно просто виведення списку вісх юзерів.

При реєстрації мейли не можуть повторюватись */

const express = require('express');
const expressHbs = require('express-handlebars');
const fs = require('fs');
const path = require('path');
const users = require('./users.json');

const app = express();
const static = path.join(__dirname, 'static');

app.engine('.hbs', expressHbs({
    defaultLayout: false,
}));

app.set('view engine', '.hbs');
app.set('views', static);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(static));

app.get('/', (req, res) => {
    res.render('main');
})
app.get('/users', (req, res) => {
    res.render('users', {users});
})
app.get('/login', (req, res) => {
    res.render('login');
})
app.get('/reg', (req, res) => {
    res.render('reg');
})

app.post('/login', (req, res) => {
    const userData = req.body;
    const user = users.find(user => (user.email === userData.email && user.password === userData.password))

    if (!!user) {
        res.json(user);
        return;
    }

    res.json('You are not registred.');
})

app.post('/reg', (req, res) => {
    const userData = req.body;
    const itsTrue = !!users.find(user => user.email === userData.email);

    if (itsTrue) {
        res.json('Error! This email is already taken.');
        return;
    }

    users.push(userData);
    fs.writeFile('./users.json', JSON.stringify(users), () => {});

    res.json('You are registered successfully!');
})

app.listen(3000, () => {
    console.log('App listen 3000');
})
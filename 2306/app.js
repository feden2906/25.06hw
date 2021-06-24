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
console.log(JSON.parse(users));

const app = express();
const static = path.join(__dirname, 'static');

// app.engine('.hbs', expressHbs({
//     defaultLayout: false,
// }));

// app.set('view engine', '.hbs');
// app.set('views', static);

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(express.static, static);

app.listen(3000, () => {
    console.log('App listen 3000');
})
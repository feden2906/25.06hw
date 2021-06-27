const {usersDB} = require('../dataBase');

module.exports = {
    checkIsUserCorrect: (req, res, next) => {
        const {email, password} = req.body;
        const isUserPresent = usersDB.some(user => (user.email === email && user.password === password));

        console.log(req.body);

        if (!isUserPresent) {
            res.json('This email is not registered.');
            return;
        }

        next();
    }
};
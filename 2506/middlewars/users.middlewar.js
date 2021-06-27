const usersService = require('../services/users.service');
const usersDB = require('../dataBase/usersDB');

module.exports = {
    checkIsUserPresent: (req, res, next) => {
        const {email} = req.body;
        const isUserPresent = usersDB.some(user => user.email === email);

        if (isUserPresent) {
            res.json('This email is already registered.');
            return;
        }

        next();
    }
}
const {usersService} = require('../services');

module.exports = {
    loginUser: (req, res) => {
        const users = usersService.getAllUsers();
        res.json('Welcome');
    }
};
const usersService = require('../services/users.service');

module.exports = {
    createUser: (req, res) => {
        usersService.createUser(req.body);
        res.json('You are registered successfully.');
    },
    getAllUsers: (req, res) => {
        const users = usersService.getAllUsers();
        res.json(users);
    },
    getUserById: (req, res) => {
        const user = usersService.getUserById(req.params);
        res.json(user);
    },
    updateUserById: (req, res) => {
        const user = usersService.updateUserById(req.params, req.body);
        res.json(user);
    },
    deleteUserById: (req, res) => {
        usersService.deleteUserById(req.params);
        res.json('You deleted successfully.');
    }
};
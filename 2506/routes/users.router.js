const router = require('express').Router();

const usersController = require('../controllers/users.controller');

router.post('/', usersController.createUser);
router.get('/', usersController.getAllUsers);
router.get('/:userId', usersController.getUserById);
router.put('/:userId', usersController.updateUserById);
router.delete('/:userId', usersController.deleteUserById);

module.exports = router;
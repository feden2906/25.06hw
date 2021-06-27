const router = require('express').Router();

const usersController = require('../controllers/users.controller');
const usersMiddlewar = require('../middlewars/users.middlewar');

router.post('/', usersMiddlewar.checkIsUserPresent, usersController.createUser);
router.get('/', usersController.getAllUsers);
router.get('/:userId', usersController.getUserById);
router.put('/:userId', usersController.updateUserById);
router.delete('/:userId', usersController.deleteUserById);

module.exports = router;
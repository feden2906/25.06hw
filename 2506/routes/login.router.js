const router = require('express').Router();

const {loginController} = require('../controllers');
const {loginMiddlewar} = require('../middlewars');

router.post('/', loginMiddlewar.checkIsUserCorrect, loginController.loginUser);

module.exports = router;

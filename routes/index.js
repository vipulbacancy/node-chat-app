const express = require('express');
const router = express.Router();

const webController = require('../controllers/web.controller.js')

router.get('/', webController.home);
router.get('/about', webController.about);
router.get('/contact', webController.contact);
router.get('/login', webController.login);
router.get('/register', webController.register);

router.post('/register', webController.register_save);

module.exports = router;

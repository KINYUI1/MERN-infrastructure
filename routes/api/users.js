const express = require('express')
const userctrl = require('../../controllers/api/users')
const router = express.Router()
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/',userctrl.create)
router.post('/login',userctrl.login)
router.get('/check-token', userctrl.checkToken);
router.get('/check-token', ensureLoggedIn, userctrl.checkToken);

module.exports = router
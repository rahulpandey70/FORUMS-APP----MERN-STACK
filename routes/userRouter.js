const router = require('express').Router();
const auth = require('../middleware/auth');
const userCntrl = require('../controllers/userCntrl');

router.get('/search', auth, userCntrl.searchUser)
router.get('/user/:id', auth, userCntrl.getUser)
router.patch('/user', auth, userCntrl.updateUser)
router.patch('/user/:id/follow', auth, userCntrl.follow)
router.patch('/user/:id/unfollow', auth, userCntrl.unfollow)

router.get('/suggestionsUser', auth, userCntrl.suggestionsUser)

module.exports = router;
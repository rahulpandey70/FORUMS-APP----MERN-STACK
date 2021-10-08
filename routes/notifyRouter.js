const router = require('express').Router()
const auth = require('../middleware/auth')
const notifyCntrl = require('../controllers/notifyCntrl')

router.post('/notify', auth, notifyCntrl.createNotify)
router.delete('/notify/:id', auth, notifyCntrl.removeNotify)
router.get('/notifies', auth, notifyCntrl.getNotifies)
router.patch('/isReadNotify/:id', auth.apply, notifyCntrl.isReadNotify)
router.delete('/deleteAllNotify', auth, notifyCntrl.deleteAllNotifies)

module.exports = router
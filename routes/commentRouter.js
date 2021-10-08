const router = require('express').Router()
const commentCntrl = require('../controllers/commentCntrl')
const auth = require('../middleware/auth')

router.post('/comment', auth, commentCntrl.createComment)
router.patch('/comment/:id', auth, commentCntrl.updateComment)
router.patch('/comment/:id/like', auth, commentCntrl.likeComment)
router.patch('/comment/:id/unlike', auth, commentCntrl.unLikeComment)
router.delete('/comment/:id', auth, commentCntrl.deleteComment)

module.exports = router
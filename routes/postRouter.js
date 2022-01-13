const router = require("express").Router();
const postCntrl = require("../controllers/postCntrl");
const auth = require("../middleware/auth");

router
  .route("/posts")
  .post(auth, postCntrl.createPost)
  .get(auth, postCntrl.getPosts);

router
  .route("/post/:id")
  .patch(auth, postCntrl.updatePost)
  .get(auth, postCntrl.getPost)
  .delete(auth, postCntrl.deletePost);

router.patch("/post/:id/like", auth, postCntrl.likePost);
router.patch("/post/:id/unlike", auth, postCntrl.unLikePost);
router.get("/user_posts/:id", auth, postCntrl.getUserPosts);

module.exports = router;

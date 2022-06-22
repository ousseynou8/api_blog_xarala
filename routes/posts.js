const router = require("express").Router();
const postController = require("../controllers/post");




router.get("/:id", postController.getPost);
router.get("/", postController.getAllPost);
router.post("/", postController.createPost);
router.put("/:id", postController.putPost);
router.delete("/:id", postController.deletePost);
module.exports = router;
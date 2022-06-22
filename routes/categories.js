const router = require("express").Router();
const categoryController = require("../controllers/category")


router.post("/", categoryController.createCategory)
router.get("/", categoryController.getAllCategory)
router.get("/:id", categoryController.getCategory)


module.exports = router;
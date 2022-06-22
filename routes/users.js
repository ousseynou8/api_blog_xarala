const router = require("express").Router();
const userController = require("../controllers/user")

//modifier
router.put("/:id", userController.updateUser)
    //afficher user
router.get("/:id", userController.getUser)
    //afficher all user
router.get("/", userController.getAllUsers)
    //delete User
router.delete("/:id", userController.deleteUser)

module.exports = router;
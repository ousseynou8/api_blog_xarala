const router = require("express").Router();
const authController = require("../controllers/auth");

// Inscription
router.post("/signUp", authController.signUp);
router.post("/signIn", authController.signIn);
module.exports = router;
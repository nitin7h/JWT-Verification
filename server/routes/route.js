const express = require("express")
const router = express.Router()
const { loginFunction, registrationFunction, verifyFunction } = require("../controllers/controller")
const { verifyToken } = require("../jwt/jwt")


router.post("/registration", registrationFunction)
router.post("/login", loginFunction)
router.get("/verify", verifyToken, verifyFunction)


module.exports = router
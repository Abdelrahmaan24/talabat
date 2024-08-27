const router = require("express").Router();
const express = require("express");
const driverValidator = require("../validators/driverValidator");
const driverController = require("../controllers/driverController");



router.post("/signup", driverValidator.createDriver , driverController.signup)
router.post("/login", driverValidator.loginDriver , driverController.login)


module.exports = router
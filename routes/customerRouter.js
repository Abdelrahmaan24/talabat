const router = require("express").Router();
const express = require("express");
const customerValidator = require("../validators/customerValidator");
const customerController = require("../controllers/customerController");



router.post("/signup", customerValidator.createCustomer , customerController.signup)
router.post("/login", customerValidator.loginCustomer , customerController.login)



module.exports = router
const router = require("express").Router();
const express = require("express");
const resturantValidator = require("../validators/restaurantValidator");
const restaurantController = require("../controllers/restaurantController");


router.post("/signup",resturantValidator.createRestaurant ,restaurantController.signup)
router.post("/login",resturantValidator.loginRestaurant ,restaurantController.login)


module.exports = router
const {body} = require('express-validator');


const createRestaurant = [
    body('Name').isString().withMessage('Name is required'),
    body('email').isEmail().withMessage("email is required"),
    body('password').isString().isLength({min: 8}).withMessage('password is required'),
    body('phoneNumber').isMobilePhone("ar-EG").withMessage('phoneNumber is required'),
    body('addresses').isString().withMessage('addresses is required'),
    body("coordiantes").isArray().withMessage('coordiantes is required'),
    body("owner").isString().withMessage('owner is required'),
    body("category").isIn(["Fast Food", "Cafe", "Dessert", "Other"]).withMessage('category is required'),
];


const loginRestaurant = [
    body('email').isEmail().withMessage("email is required"),
    body('password').isString().isLength({min: 8}).withMessage('password is required'),
];


const addMenuItem = [
    body('name').isString().withMessage('name is required'),
    body('price').isNumeric().withMessage('price is required'),
    body('description').isString().withMessage('description is required'),
    body('category').isIn(["Fast Food", "Cafe", "Dessert", "Other"]).withMessage('category is required'),
];


module.exports = {createRestaurant , loginRestaurant , addMenuItem}
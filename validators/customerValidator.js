const {body} = require('express-validator');


const createCustomer = [
    body('firstName').isString().withMessage('firstName is required'),
    body('lastName').isString().withMessage('lastName is required'),
    body('email').isEmail().withMessage("email is required"),
    body('password').isString().isLength({min: 8}).withMessage('password is required'),
    body('phoneNumber').isMobilePhone("ar-EG").withMessage('phoneNumber is required'),
    body('addresses').isString().withMessage('addresses is required'),
    body("coordiantes").isArray().withMessage('coordiantes is required'),
    body("sex").isIn(["male", "female"]).withMessage("Sex must be either 'male', 'female'"),
    body("profilePictureURL").optional().isURL().withMessage("Profile picture URL must be a valid URL if provided"),
];


const loginCustomer = [
    body('email').isEmail().withMessage("email is required"),
    body('password').isString().isLength({min: 8}).withMessage('password is required'),
];


module.exports = {createCustomer , loginCustomer}
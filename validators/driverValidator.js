const {body} = require('express-validator');


const createDriver = [
    body('firstName').isString().withMessage('firstName is required'),
    body('lastName').isString().withMessage('lastName is required'),
    body('age').isInt({min: 18, max: 65}).withMessage('Age is required'),
    body('email').isEmail().withMessage("email is required"),
    body("vehicle").isIn(["car", "motorcycle", "bicycle", "on_foot"]).withMessage("Vehicle must be either 'car', 'motorcycle', 'bicycle' or 'on_foot'"),
    body('password').isString().isLength({min: 8}).withMessage('password is required'),
    body('phoneNumber').isMobilePhone("ar-EG").withMessage('phoneNumber is required'),
    body("nationalId").isString().withMessage("nationalId is required"),
];


const loginDriver = [
    body('email').isEmail().withMessage("email is required"),
    body('password').isString().isLength({min: 8}).withMessage('password is required'),
];


module.exports = {createDriver , loginDriver}
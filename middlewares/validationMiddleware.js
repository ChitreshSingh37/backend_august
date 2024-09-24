
const { body } = require("express-validator");

let validations_middlewares=[
    body("name")
    .notEmpty()
    .withMessage("user name must not be empty")
    .isLength({ min: 3, max: 15 })
    .withMessage("name length should be 3 to 15 char long")
    ,
    body("email")
    .notEmpty()
    .withMessage("email must not be empty")
    .isEmail()
    .withMessage("email should be valid email")
    ,
    body("password")
    .notEmpty()
    .withMessage("password should not be empty")
    .isStrongPassword()
    .withMessage("password should be strong password")
    
]

module.exports = validations_middlewares;
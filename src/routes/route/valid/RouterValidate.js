const { body, check } = require('express-validator');
 
const validCreateUser = [
    body('firstName').trim().notEmpty().isString().not().isBoolean()    ,
    body('email').notEmpty().isEmail(),
]

const validIdParams = [
    check('id').trim().notEmpty().isNumeric()
]




module.exports = {validCreateUser,validIdParams}
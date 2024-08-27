const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const customerRebo = require('../repos/customerRepo');
const config = require('../config/config');

const signup = async (firstname , lastname , email , password , phoneNumber) => {
    try{
        const token = jwt.sign({firstname , lastname , email , password , phoneNumber} , config.jwt.secret , {expiresIn: config.jwt.expiresIn});
        const customer = await customerRebo.createCustomer(firstname , lastname , email , password , phoneNumber);
        return {customer , token};
    }
    catch(err){
        throw err;
    }
}


const login = async (email , password) => {
    try{
        const customer = await customerRebo.findCustomerByEmail(email);
        if(!customer){
            throw new Error('Customer not found');
        }
        const isMatch = await bcrypt.compare(password , customer.password);
        if(!isMatch){
            throw new Error('Incorrect password');
        }
        const token = jwt.sign({ email } , config.jwt.secret , {expiresIn: config.jwt.expiresIn});
        return {customer , token};
    }
    catch(err){
        throw err;
    }
}


module.exports = {signup , login}
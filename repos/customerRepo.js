const customer = require("../models/customer");

const createCustomer = async (firtsname , lastname , email , password , phoneNumber) => {
    try{
        const newCustomer = new customer({firtsname , lastname , email , password , phoneNumber});
        return await newCustomer.save();
    }
    catch(err){
        throw err;
    }
};


const findCustomerByEmail = async (email) => {
    try{
        return await customer.findOne({ email });
    }
    catch(err){
        throw err;
    }
};


module.exports = { createCustomer, findCustomerByEmail }
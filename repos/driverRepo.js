const driver = require("../models/driver");

const createDriver = async (firstName, lastName, email, password, phoneNumber) => {
    try{
        const newDriver = new driver({firstName, lastName, email, password, phoneNumber});
        await newDriver.save();
        return newDriver;
    }
    catch(err){
        throw err;
    }
};


const findDriverByEmail = async (email) => {
    try{
        return await driver.findOne({ email });
    }
    catch(err){
        throw err;
    }
};


module.exports = {createDriver, findDriverByEmail}
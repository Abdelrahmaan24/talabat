const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const driverRepo = require('../repos/driverRepo');
const config = require('../config/config');

const signup = async (firstName, lastName, email, password, phoneNumber) => {
    try{
        const token = jwt.sign({firstName, lastName, email, password, phoneNumber} , config.jwt.secret , {expiresIn: config.jwt.expiresIn});
        const driver = await driverRepo.createDriver(firstName, lastName, email, password, phoneNumber);
        return {driver , token};
    }
    catch(err){
        throw err;
    }
}


const login = async (email , password) => {
    try{
        const driver = await driverRepo.findDriverByEmail(email);
        if(!driver){
            throw new Error('driver not found');
        }
        const isMatch = await bcrypt.compare(password , driver.password);
        if(!isMatch){
            throw new Error('Incorrect password');
        }
        const token = jwt.sign({ email } , config.jwt.secret , {expiresIn: config.jwt.expiresIn});
        return {driver , token};
    }
    catch(err){
        throw err;
    }
}


module.exports = {signup , login}
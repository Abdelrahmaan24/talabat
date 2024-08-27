const jsend = require('jsend');
const driverService = require('../services/driverService');

const signup = async (req, res , next) => {
    try{
        const {firstName, lastName, email, password, phoneNumber} = req.body;
        const {driver , token} = await driverService.signup(firstName, lastName, email, password, phoneNumber);
        res.cookie('token' , token , {
            httpOnly : true,
        });
        res.send(jsend.success({driver}));
    }catch(err){
        next(err);
    }
}


const login = async (req, res , next) => {
    try{
        const {email , password} = req.body;
        const {driver , token} = await driverService.login(email , password);
        res.cookie('token' , token , {
            httpOnly : true,
        });
        res.send(jsend.success({driver}));
    }catch(err){
        next(err);
    }
}



module.exports = {
    signup,
    login
}
const jsend = require('jsend');
const customerService = require('../services/customerService');

const signup = async (req, res , next) => {
    try{
        const {firstname , lastname , email , password , phoneNumber} = req.body;
        const {customer , token} = await customerService.signup(firstname , lastname , email , password , phoneNumber);
        res.cookie('token' , token , {
            httpOnly : true,
        });
        res.send(jsend.success({customer}));
    }catch(err){
        next(err);
    }
}


const login = async (req, res , next) => {
    try{
        const {email , password} = req.body;
        const {customer , token} = await customerService.login(email , password);
        res.cookie('token' , token , {
            httpOnly : true,
        });
        res.send(jsend.success({customer}));
    }catch(err){
        next(err);
    }
}



module.exports = {
    signup,
    login
}
const jsend = require('jsend');
const restaurantService = require('../services/restaurantService');

const signup = async (req, res , next) => {
    try{
        const {email , password , name , addresses} = req.body;
        const {restaurant , token} = await restaurantService.signup(email , password , name , addresses);
        res.cookie('token' , token , {
            httpOnly : true,
        });
        res.send(jsend.success({restaurant}));
    }catch(err){
        next(err);
    }
}


const login = async (req, res , next) => {
    try{
        const {email , password} = req.body;
        const {restaurant , token} = await restaurantService.login(email , password);
        res.cookie('token' , token , {
            httpOnly : true,
        });
        res.send(jsend.success({restaurant}));
    }catch(err){
        next(err);
    }
}



module.exports = {
    signup,
    login
}
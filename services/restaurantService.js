const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const restaurantRepo = require('../repos/restaurantRepo');
const config = require('../config/config');

const signup = async (email , password , name , addresses) => {
    try{
        const token = jwt.sign({email , password , name , addresses} , config.jwt.secret , {expiresIn: config.jwt.expiresIn});
        const restaurant = await restaurantRepo.createRestaurant(email , password , name , addresses);
        return {restaurant , token};
    }
    catch(err){
        throw err;
    }
}


const login = async (email , password) => {
    try{
        const restaurant  = await restaurantRepo.findRestaurantByEmail(email);
        if(!restaurant){
            throw new Error('restaurant not found');
        }
        const isMatch = await bcrypt.compare(password , restaurant.password);
        if(!isMatch){
            throw new Error('Incorrect password');
        }
        const token = jwt.sign({ email } , config.jwt.secret , {expiresIn: config.jwt.expiresIn});
        return {restaurant , token};
    }
    catch(err){
        throw err;
    }
}


module.exports = {signup , login}
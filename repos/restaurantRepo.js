const restaurant = require("../models/resturant");


const createRestaurant = async (email , password , name , addresses) => {
    try{
        const newRestaurant = new restaurant({
            email , password , name , addresses
        });
        return await newRestaurant.save();
    }
    catch(err){
        throw err;
    }
};


const findRestaurantByEmail = async (email) => {
    try{
        return await restaurant.findOne({ email });
    }
    catch(err){
        throw err;
    }
};
module.exports = {createRestaurant , findRestaurantByEmail}
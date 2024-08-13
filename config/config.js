const dotenv = require('dotenv');

dotenv.config();

const config = {
    port: process.env.PORT,
    mongoURI: process.env.MONGO_URI,
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN
    }
};

module.exports = config
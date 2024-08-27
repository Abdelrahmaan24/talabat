const express = require('express');
const config = require('./config/config');
const connectDB = require('./config/db');
const jsend = require('jsend');
const cookieParser = require('cookie-parser');
const app = express();
const customerRouter = require('./routes/customerRouter');
const driverRouter = require('./routes/driverRouter');
const resturantRouter = require('./routes/restaurantRouter');
app.use(express.json());
app.use(cookieParser());


connectDB();

app.get('/', (req, res) => {
    res.send('Hello from talabat');
});

app.use("/customer" , customerRouter );
app.use("/driver" , driverRouter);
app.use("/restaurant" , resturantRouter);

const port = config.port || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

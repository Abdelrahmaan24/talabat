const express = require('express');
const config = require('./config/config');
const connectDB = require('./config/db');

const app = express();

const port = config.port || 3000;

app.use(express.json());

(async () => {
    await connectDB();
})();


app.get('/', (req, res) => {
    res.send('Hello from talabat');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

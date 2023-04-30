const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS).then(() => {
    console.log('Connected to Database')
});

app.use('/app', routesUrls);

app.listen(4000, () => console.log("Server is up and running"));
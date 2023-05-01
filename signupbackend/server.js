const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrls = require('./routes/routes');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS).then(() => {
    console.log('Connected to Database')
});

app.use(express.json());

app.use(cors());

app.use('/app', routesUrls);

app.listen(4000, () => console.log("Server is up and running"));
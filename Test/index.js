const app = require('./app');

const dotenv = require('dotenv');

const connectDatabase = require('./config/database');

dotenv.config({path : './config/config.env'});

//Connecting to mongoDB database
connectDatabase();

app.listen(process.env.PORT,() => {
    console.log(`Listening on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
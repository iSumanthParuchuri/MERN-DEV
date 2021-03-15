const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({path : './config.env'});

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }).then(con => {
          console.log(`MongoDB connected with HOST : ${con.connection.host}`);
      });
}

module.exports = connectDatabase;
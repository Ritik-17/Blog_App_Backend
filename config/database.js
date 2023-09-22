const mongoose = require('mongoose');

require('dotenv').config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(console.log('DB Connection is successfull'))
    .catch((error) => {
        console.log('DB Connection Failed');
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;
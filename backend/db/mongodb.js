const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGO_URI;

mongoose.connect(uri).then(() => {
  console.log('Connected to MongoDB');
}
).catch(err => {
    console.log('Error connecting to MongoDB:', err.message);
})

module.exports = {db: mongoose};
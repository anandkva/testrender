const mongoose = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://Anand:12345@cluster0.7lpqy.mongodb.net/Test', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('DB connection established.')
    } catch (error) {
        console.log(`DB connectivity error=${error}`);
    }
}

module.exports = db;
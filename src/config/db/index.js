const mongoose = require('mongoose');

async function connect() {
    const mongoAtlasUri = "mongodb+srv://admin:admin@cluster0.vqcos.mongodb.net/Server?retryWrites=true&w=majority";
    try {
        await mongoose.connect(mongoAtlasUri); 
        console.log('connect successfully');
    } catch (err) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };

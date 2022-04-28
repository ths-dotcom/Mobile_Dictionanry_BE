const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Donate = new Schema(
    {
        Amount: {type: String, required: true}, 
        Method: {type: String, required: true},
    }, 
    {timestamps: true}
);

module.exports = mongoose.model('Donate', Donate);

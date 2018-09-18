var mongoose = require('mongoose');
var assert = require('assert');
var Schema = mongoose.Schema;
var hotelSchema = new Schema({
    HotelName: {
        type: String,
        require: true,
    },
    HotelID: {
        type: String,
        require: true,
        unique: true
    }
});

var Hotels = mongoose.model('hotelCollection', hotelSchema);
module.exports = Hotels;

const mongoose = require('mongoose');

const newsupdateSchema = new mongoose.Schema({
    nname:String,
    nlink:String
});

module.exports = mongoose.model('news', newsupdateSchema);
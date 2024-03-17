const mongoose = require('mongoose')

const noticeCircularSchema = new mongoose.Schema({
    ncname: String,
    link: String
});

module.exports = mongoose.model('noticeCirculars', noticeCircularSchema);
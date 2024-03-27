const newsUpdate = require('../models/newsUpdate');
const mongodb = require('mongodb');

// Add API for News Update
exports.addNews = async (request, response) => {
    let data = newsUpdate({
        'nname': request.body.nname,
        'nlink': request.body.nlink
    });

    const insertData = await data.save();

    var arr = {
        'status': true,
        'message': "Record Insert Successfully",
        'data': insertData
    };

    response.send(arr);
};

// Filter API for News Update
exports.filterNews = async (request, response) => {
    let newsData = await newsUpdate.find({
        "$or": [
            { "nname": { $regex: request.params.filter } }
        ]
    });

    if (newsData.length) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': newsData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': newsData
        };
    }

    response.send(arr);
};

// View API for News Update
exports.viewNews = async (request, response) => {
    const newsData = await newsUpdate.find();

    if (newsData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': newsData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': newsData
        };
    }

    response.send(arr);
};

// Update APi for News Update
exports.updateNews = async (request, response) => {
    let data = {
        'nname': request.body.nname,
        'nlink': request.body.nlink
    };

    const updateData = await newsUpdate.updateOne({ '_id': new mongodb.ObjectId(request.params.id) }, { $set: data });

    var arr = {
        'status':true,
        'message': "Record Update Successfully!!",
        'data': updateData
    };

    response.send(arr);
};

// Delete API for News Update
exports.deleteNews = async (request, response) => {
    const deleteData = await newsUpdate.deleteOne({'_id': new mongodb.ObjectId(request.params.id)});

    var arr = {
        'status':true,
        'message': "Record Delete Successfully"
    };

    response.send(arr);
};
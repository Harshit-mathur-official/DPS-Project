const noticeCircular = require('../models/noticeCircular')
const mongodb = require('mongodb');

// Add API for Notice Circular Section
exports.addNoticeCircular = async (request, response) => {
    let data = noticeCircular({
        'ncname': request.body.ncname,
        'link': request.body.link
    });

    const insertData = await data.save();

    var arr = {
        'status': true,
        'message': 'Record Insert Successfully',
        'data': insertData
    };

    response.send(arr);
};

// Delete API for Notice Circular Section 
exports.deleteNoticeCircular = async (request, response) => {
    const deleteData = await noticeCircular.deleteOne({ '_id': new mongodb.ObjectId(request.params.id) });

    var arr = {
        'status': true,
        'message': 'Record Delete Successfully!!',
    };

    response.send(arr);
};

// Filter API for Notice Circular Section 
exports.filterNoticecircular = async (request, response) => {
    let noticeCircularData = await noticeCircular.find({
        "$or": [
            { "ncname": { $regex: request.body.filter } }
        ]
    });

    if (noticeCircularData.length) {
        var arr = {
            'status': true,
            'message': "Record found Successfully",
            'data': noticeCircularData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': 'No Record Found!!',
            'data': noticeCircularData
        };
    }

    response.send(arr);
};


// Update API for Notice Circular Section
exports.updateNoticeCircular = async (request, response) => {
    const data = {
        'ncname': request.body.ncname,
        'link': request.body.link
    };

    const updateData = await noticeCircular.updateOne({ '_id': new mongodb.ObjectId(request.params.id) }, { $set: data });

    var arr = {
        'status': true,
        'message': 'Record Update successfully'
    };

    response.send(arr);
};

// View API for Notice Circular Section
exports.viewNoticeCircular = async (request, response) => {
    let noticeCircularData = await noticeCircular.find();

    if (noticeCircularData.length != 0) {
        var arr = {
            'status': true,
            'message': 'Record Found Successfully',
            'data': noticeCircularData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': 'No Record Found !!'
        };
    }

    response.send(arr);
}
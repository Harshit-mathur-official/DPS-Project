const enquiry = require('../models/enquiry');
const mongodb = require('mongodb');

// Add API for Enquiry Form
exports.addEnquiry = async (request, response) => {
    const data = enquiry({
        'ename': request.body.ename,
        'email': request.body.email,
        'emobile': request.body.emobile,
        'ecomment': request.body.ecomment,
        'efile': request.body.efile
    });

    const insertData = await data.save();

    var arr = {
        'status': true,
        'message': 'Record Insert Successfully',
        'data': insertData
    };

    response.send(arr);
};

// Delete API for Enquiry Form
exports.deleteEnquiry = async (request, response) => {
    const deleteData = await enquiry.deleteOne({ '_id': new mongodb.ObjectId(request.params.id) });

    var arr = {
        'status': true,
        'message': 'Record Delete Successfully!!'
    };

    response.send(arr);
};

// Filter API for Enquiry Form
exports.filterEnquiry = async (request, response) => {
    let enquiryData = await enquiry.find({
        "$or": [
            { "ename": { $regex: request.params.filter } },
            { "email": { $regex: request.params.filter } },
            { "emobile": { $regex: request.params.filter } }
        ]
    });

    if (enquiryData.length) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully!!",
            'data': enquiryData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Data Found!!",
            'data': enquiryData
        };
    }

    response.send(arr);
};

// View API for Enquiry Data
exports.viewEnquiry = async (request, response) => {
    let enquiryData = await enquiry.find();

    if (enquiryData.length != 0) {
        var arr = {
            'status': true,
            'message': 'Record Found Successfully',
            'data': enquiryData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found",
            'data': enquiryData
        };
    }

    response.send(arr);
};
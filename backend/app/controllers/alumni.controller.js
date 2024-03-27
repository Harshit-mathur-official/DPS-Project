const alumniForm = require('../models/alumniForm');
const mongodb = require('mongodb');

// Add API for Alumni Form
exports.addAlumniForm = async (request, response) => {
    let data = alumniForm({
        'sname': request.body.sname,
        'fname': request.body.fname,
        'yearofpassout': request.body.yearofpassout,
        'nyearschool': request.body.nyearschool,
        'address': request.body.address,
        'contact': request.body.contact,
        'aemail': request.body.aemail,
        'presentpos': request.body.presentpos,
        'refteachers': request.body.refteachers,
        'refprincipal': request.body.refprincipal,
        'photo': request.body.photo
    });

    const insertData = await data.save();

    var arr = {
        'status': true,
        'message': 'Record Insert Successfully!!',
        'data': insertData
    };

    response.send(arr);
};

// View API for Alumni Form
exports.viewAlumniForm = async (request, response) => {
    const viewData = await alumniForm.find();

    if (viewData.length != 0) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': viewData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': 'No Record found!!',
            'data': viewData
        };
    }

    response.send(arr);
};

// Filter/Find APi for Alumni Form 
exports.filterAlumniForm = async (request, response) => {
    let filterData = await alumniForm.find({
        "$or": [
            { "sname": { $regex: request.params.filter } },
            { "fname": { $regex: request.params.filter } }
        ]
    });

    if (filterData.length) {
        var arr = {
            'status': true,
            'message': "Record Found Successfully",
            'data': filterData
        };
    }
    else {
        var arr = {
            'status': false,
            'message': "No Record Found!!",
            'data': filterData
        };
    }

    response.send(arr);
};

// Update API for Alumni Form
exports.updateAlumniForm = async (request, response) => {
    let data = {
        'sname': request.body.sname,
        'fname': request.body.fname,
        'yearofpassout': request.body.yearofpassout,
        'nyearschool': request.body.nyearschool,
        'address': request.body.address,
        'contact': request.body.contact,
        'aemail': request.body.aemail,
        'presentpos': request.body.presentpos,
        'refteachers': request.body.refteachers,
        'refprincipal': request.body.refprincipal,
        'photo': request.body.photo
    };

    const updateData = await alumniForm.updateOne({ '_id': new mongodb.ObjectId(request.params.id) }, { $set: data });

    var arr = {
        'status': true,
        'message': 'Record Update Successfully'
    };

    response.send(arr);
};

// Delete API for Alumni Form
exports.deleteAlumniForm = async (request, response) => {
    const deleteData = await alumniForm.deleteOne({'_id': new mongodb.ObjectId(request.params.id)});

    var arr = {
        'status': true,
        'message': 'Record Delete Successfully'
    };

    response.send(arr);
}
'use strict';

var mongoose = require('mongoose'),
    Record = mongoose.model('Records');
var ejs = require('ejs');


exports.create_a_record = function(req, res) {
    var new_record = new Record(req.query);
    new_record.save(function(err, record) {
        if (err)
            res.send(err);
        res.send("AckOk");
        //res.json(record);
    });
};


// exports.read_a_record = function(req, res) {
//     Record.findOne({}, {}, { sort: { 'created_at': -1 } }, function(err, record) {
//         if (err)
//             res.send(err);
//         res.send(record.fid1 + ":" + record.fid2 + ":" + record.fid3);
//     });
// };

exports.read_a_record = function(req, res) {
    Record.findOne().sort({ created_at: 'asc', _id: -1 }).limit(1).exec(function(err, record) {
        if (err)
            res.send(err);
        res.send(record.fid1 + ":" + record.fid2 + ":" + record.fid3);
    });
};



exports.read_all_record = function(req, res) {
    Record.find({}, function(err, record) {
        if (err)
            res.send(err);
        res.render('../table', { record: record });
    });
};


exports.delete_all_record = function(req, res) {
    Record.remove({}, function(err) {
        if (err)
            res.send(err);
        res.end('Records successfully deleted');
    });
};
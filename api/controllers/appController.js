'use strict';

var mongoose = require('mongoose'),
    Record = mongoose.model('Records');

exports.list_all_records = function(req, res) {
    Record.find({}, function(err, record) {
        if (err)
            res.send(err);
        res.json(record);
    });
};


exports.create_a_record = function(req, res) {
    var new_record = new Record(req.body);
    new_record.save(function(err, record) {
        if (err)
            res.send(err);
        res.json(record);
    });
};


exports.read_a_record = function(req, res) {
    Record.findById(req.params.recordId, function(err, record) {
        if (err)
            res.send(err);
        res.json(record);
    });
};


exports.update_a_record = function(req, res) {
    Record.findOneAndUpdate(req.params.recordId, req.body, { new: true }, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete_a_record = function(req, res) {

    Task.remove({
        _id: req.params.recordId
    }, function(err, record) {
        if (err)
            res.send(err);
        res.json({ message: 'Record successfully deleted' });
    });
};
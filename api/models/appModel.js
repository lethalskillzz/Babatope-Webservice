'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    fid1: {
        type: String,
        Required: 'Kindly enter the fid1 of the record'
    },

    fid2: {
        type: String,
        Required: 'Kindly enter the fid2 of the record'
    },

    fid3: {
        type: String,
        Required: 'Kindly enter the fid3 of the record'
    },

    Created_date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Records', TaskSchema);
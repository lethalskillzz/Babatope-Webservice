'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    name: {
        type: String,
        Required: 'Kindly enter the name of the record'
    },

    finger1: {
        type: String,
        Required: 'Kindly enter the finger1 of the record'
    },

    finger2: {
        type: String,
        Required: 'Kindly enter the finger2 of the record'
    },

    Created_date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Records', TaskSchema);
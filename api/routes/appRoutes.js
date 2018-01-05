'use strict';
module.exports = function(app) {
    var record = require('../controllers/appController');

    //app Routes
    app.route('/records')
        .get(record.create_a_record);

    app.route('/records/read')
        .get(record.read_a_record);

    app.route('/records/readall')
        .get(record.read_all_record);

    app.route('/records/deleteall')
        .get(record.delete_all_record);

};
'use strict';
module.exports = function(app) {
    var record = require('../controllers/appController');


    //app Routes
    app.route('/records')
        .get(record.list_all_records)
        .post(record.create_a_record)
        .get(record.count_all_records);


    app.route('/records/:recordId')
        .get(record.read_a_record)
        .put(record.update_a_record)
        .delete(record.delete_a_record);
};
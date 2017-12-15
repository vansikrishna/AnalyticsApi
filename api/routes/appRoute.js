'use strict';
module.exports = function(app){
    var eventController = require('../controllers/eventController');

    //events list and create event
    app.route('/events')
        .get(eventController.get_all_events)
        .post(eventController.create_event);

    app.route('/data')
    .get(eventController.get_all_data);

    app.route('/clearAll')
    .post(eventController.delete_all);
};
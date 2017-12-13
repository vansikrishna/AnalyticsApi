'use strict';
var mongoose = require('mongoose');
var Event = mongoose.model('events');

exports.get_all_events = function(request, response){
    Event.find({}, function (error, event){
        if(error)
            response.send(error);
        response.json(event);
    });
};

exports.create_event = function(request, response){
    var event = new Event(request.body);
    event.save(function(error, event){
        if(error)
            response.send(error);
        response.json(event);
    });
};
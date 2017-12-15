'use strict';
var mongoose = require('mongoose');
var Event = mongoose.model('event');
var Data = mongoose.model('data');

exports.delete_all = function(request, response){
    Event.deleteMany({})
    .exec(function (error, events){
        if(error)
            response.send(error);
        console.log('All the events cleared');
        Data.deleteMany({})
        .exec(function(error, data){
            if(error)
                response.send(error);
            response.json({message: 'All the data and events cleared'});
            console.log('All the data cleared');
        })
    });
};

exports.get_all_events = function(request, response){
    Event.find({})
    .populate('data')
    .exec(function (error, events){
        if(error)
            response.send(error);
        response.json(events);
    });
};

exports.get_all_data = function(request, response){
    Data.find({})
    .populate('event_ref')
    .exec(function (error, data){
        if(error)
            response.send(error);
        response.json(data);
    });
};

exports.create_event = function(request, response){
    var event = new Event(request.body);
    var data = new Data(event.data);
    data.event_ref = event._id;
    data.save(function(error, data){
        if(error)
            response.send(error);
        event.data = data._id;
        event.save(function(error, event){
            if(error)
                response.send(error);
            event.data = data;
            response.json(event);
        });
        // response.json(event);
    });
};
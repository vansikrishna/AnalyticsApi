'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    appName:{
        type: String,
        required:'appName is mandatory'
    },
    eventType:{
        default: ['CLICK'],
        type:[
            {
                type: String,
                enum: ['CLICK', 'REBOOT', 'CONNECTIVITY_CHANGE', 'RSSI_CHANGE']
            }
        ]
    },
    tagName:{
        type: String,
        default: 'TAG_ANALYTICS'
    },
    data:{
        type: String,
        default: 'ABC'
    },
    event_date:{
        type: Date,
        default: Date.now
    },
    created_date:{
        type: Date,
        default: Date.now
    },
    deviceId:{
        type: String
    },
    deviceInfo:{
        type: String
    }
});

module.exports = mongoose.model('events', eventSchema);
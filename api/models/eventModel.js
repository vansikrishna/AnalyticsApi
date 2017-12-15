'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appSchema = new Schema({
    appName: {
        type: String
    },
    appVersion:{
        type: String
    }
});

var dataSchema = new Schema({
    dataValue: {
        type: String
    }, 
    created_date:{
        type: Date,
        default: Date.now
    },
    event_ref:{
        type: Schema.Types.ObjectId,
        ref: 'event'
    }
});

var eventSchema = new Schema({
    // appName: appSchema,
    data: {
        type: Schema.Types.ObjectId,
        ref: 'data'
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
    event_date:{
        type: Date,
        default: Date.now
    },
    created_date:{
        type: Date,
        default: Date.now
    }
    // ,
    // deviceId:{
    //     type: String
    // },
    // deviceInfo:{
    //     type: String
    // }
});

// eventSchema.pre('init', function(next, data) {  
//     Event.populate(data, {
//       path: 'data'
//     }, function(err, event) {
//       data = event;
//       next();
//     });
//   });


module.exports = mongoose.model('data', dataSchema);
module.exports = mongoose.model('event', eventSchema);
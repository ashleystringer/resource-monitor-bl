const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

const schema = new Schema({
    start_time: {type: Date, required: true},
    end_time: {type: Date, required: true},
    method_name: {type: String, required: true},
    resource_type: {type: String, required: true}
    //thread: {type: ObjectId, required: true}
});

module.exports = mongodb.resource('call', schema, 'content');
// app/models/Person.js
const mongodb = require ('@onehilltech/blueprint-mongodb');
const { Schema } = mongodb;

// use mongodb.Types to access mongoose.Types

const schema = mongodb.Schema ({
  first_name: {type: String, required: true, trim: true},
  last_name : {type: String, required: true, trim: true}
});

module.exports = mongodb.resource ('person', schema, 'blueprint_people');
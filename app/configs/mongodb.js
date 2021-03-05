const { env } = require ('@onehilltech/blueprint');
module.exports = {
  connections: {
    $default: {
      uri:  `mongodb://localhost/database_${env}`,
      seed: false,    // seed the database connection [default=false]
      options : {            // mongoose connection options
        useNewUrlParser: true,        
        useCreateIndex: true,
      }
    }
  }
};
const {Router} = require('@onehilltech/blueprint');

module.exports = Router.extend({
    specification: {
        '/files':{
            get: {action: 'file@getAll'}
        }
    }
});
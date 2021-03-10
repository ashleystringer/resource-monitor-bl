const {Router} = require('@onehilltech/blueprint');

module.exports = Router.extend({
    specification: {
        '/upload':{
            options: {action: 'upload@option'},
            post: {action: 'upload@upload'}
        }
    }
});
let keys;

if(process.env.NODE_DEV === 'production') {
    keys = require('./keys_prod');
} else {
    keys = require('./keys_dev')
}

module.exports = keys;

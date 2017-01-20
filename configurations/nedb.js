var nedbDatastore = require('nedb');
var Promise = require('bluebird');
Promise.promisifyAll(nedbDatastore.prototype);

module.exports = nedbDatastore;

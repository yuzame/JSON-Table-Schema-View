var schema = require('./schema');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var SchemaStore = assign({}, EventEmitter.prototype, {
    getInitialState: function() {
        return schema;
    }
});

module.exports = SchemaStore;

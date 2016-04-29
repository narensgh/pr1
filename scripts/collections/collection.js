'use strict';

var Chaplin = require('chaplin'),
    Backbone = require('backbone'),
    _ = require('underscore'),
    Config = require('../config');
var Collection = Chaplin.Collection.extend({
    initialize: function (models, options) {
        options || (options = {});
    },
    getApiUrl: function () {
        return Config.apiUrl;
    },
    sync: function (method, collection, options) {
        _.extend(options.data, {
            token: localStorage.getItem('token') || 'ad7251caca2dc1b82965767ae4cee0a1'
        });
        Backbone.sync.apply(this, arguments);
    }
});
module.exports = Collection;

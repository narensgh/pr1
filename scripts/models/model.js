'use strict'

var Chaplin = require('chaplin'),
    _ = require('underscore'),
    Config = require('../config');
var Model = Chaplin.Model.extend({
    getApiUrl: function () {
        return Config.apiUrl;
    },
    buildParam: function (method, idAttribute) {
        var response = {};
        switch (method) {
            case 'update':
            case 'read':
            case 'delete':
                _.extend(response, idAttribute);
                return '?' + $.param(response);
            case 'create':
                return '';
        }
    }
});
module.exports = Model;
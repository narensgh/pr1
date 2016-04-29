'use strict';

var Model = require('./model'),
    Backbone = require("backbone"),
    _ = require('underscore');

var UserModel = Model.extend({
    idAttribute: 'loginId',
    url: function () {
        return this.getApiUrl() + 'user';
    },
    sync: function (method, model, options) {
        options.url = this.url() + this.buildParam(method);
        Backbone.sync.apply(this, arguments);
    },
    buildParam: function (method) {
        switch (method) {
            case 'update':
                return '?userId=' + this.get('loginId');
            default:
                return '';
        }
    },
    parse: function(resp) {
        return resp.user;
    }
});

module.exports = UserModel;

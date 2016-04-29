'use strict';

var Model = require('./model'),
    Backbone = require("backbone"),
    config = require('../config'),
    _ = require('underscore');

var AuthModel = Model.extend({
    url: function () {
        return "/metrochaplin/?action=getuser";
    },
    sync: function (method, model, options) {
        options.url = this.url();
        Backbone.sync.apply(this, arguments);
    },
    parse: function(resp) {
        config.user = resp;
        return resp;
    }
});

module.exports = AuthModel;

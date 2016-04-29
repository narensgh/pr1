'use strict';

var Chaplin = require('chaplin'),
    $ = require('jquery');

var View = Chaplin.View.extend({
    getTemplateFunction: function () {
        return this.template;
    },
    getUserdata: function () {
        var userdata = {};
        userdata.username = localStorage.getItem("username");
        return userdata;
    },
    redirectTo: function (controller, action) {
        window.location.replace(action);
    }
});

module.exports = View;

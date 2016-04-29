'use strict';

var View = require('../view'),
    _ = require('underscore'),
    template = require('../../templates/partials/header.hbs');

var HeaderView = View.extend({
    template: template,
    region: 'header',
    className: 'page-header navbar navbar-fixed-top',
    events: {
        'click #logout': 'logout'
    },
    getTemplateData: function () {
        var data = View.prototype.getTemplateData.call(this),
            userdata = this.getUserdata();
        _.extend(data, userdata);
        return data;
    },
    logout: function () {
        localStorage.removeItem("token", '');
        localStorage.removeItem("username", '');
        localStorage.removeItem("peopleName", '');
        this.redirectTo('delivery', 'login');
    }
});

module.exports = HeaderView;

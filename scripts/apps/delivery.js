'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $;
var Auth = require('../models/auth');
var Chaplin = require('chaplin'),
    Application = Chaplin.Application.extend({
        title: 'Falconide Admin',
        initialize: function (options) {
            Chaplin.Application.prototype.initialize.call(this, options);
        }
    });

$(document).ready(function () {
    var auth = new Auth();
    auth.fetch({async: false});
    new Application({
        root: '/metrochaplin/',
        routes: function (match) {
            match('', 'delivery#dashboard', {name: 'dashboard'});
            match('login', 'delivery#login', {name: 'login'});
            match('dashboard', 'delivery#dashboard', {name: 'dashboard'});
        }
    });
});

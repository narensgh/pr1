'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');
Backbone.$ = $;
var Chaplin = require('chaplin'),
    Application = Chaplin.Application.extend({
        title: 'Falconide Admin',
        initialize: function(options) {
            Chaplin.Application.prototype.initialize.call(this, options);
        }
    });

$(document).ready(function() {
    new Application({
        root: '/falcon-admin/',
        routes: function(match) {
            match('dashboard', 'falcon#dashboard');
            match('dashboard/index', 'falcon#dashboard');
        }
    });
});

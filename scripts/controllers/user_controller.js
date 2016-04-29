'use strict';

var Chaplin = require('chaplin'),
    $ = require('jquery'),
    LoginView = require('../views/user/login'),
    HeaderView = require('../views/partials/header'),
    SidebarView = require('../views/partials/sidebar'),
    FooterView = require('../views/partials/footer'),
    SeedMonitorCollection = require('../collections/seedmonitor');

var UserController = Chaplin.Controller.extend({
    initialize: function (params, route, options) {
        Chaplin.Controller.prototype.initialize.call(this);

    },
    beforeAction: function (params, route, options) {
        Chaplin.Controller.prototype.beforeAction.call(this);
        this.reuse('site', SiteView);
        this.reuse('header', HeaderView);
        this.reuse('sidebar', SidebarView); 
        this.reuse('footer', FooterView);
    },
    

});
module.exports = UserController;

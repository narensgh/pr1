'use strict';

var Chaplin = require('chaplin'),
    $ = require('jquery'),
    SiteView = require('../views/site'),
    HeaderView = require('../views/partials/header'),
    SidebarView = require('../views/partials/sidebar'),
    FooterView = require('../views/partials/footer'),
    DashboardView = require('../views/delivery/dashboard'),
    LoginView = require('../views/user/login'),
    SeedMonitorCollection = require('../collections/seedmonitor');

var DeliveryController = Chaplin.Controller.extend({
    initialize: function (params, route, options) {
        Chaplin.Controller.prototype.initialize.call(this);
    },
    beforeAction: function (params, route, options) {
        Chaplin.Controller.prototype.beforeAction.call(this);
        this.reuse('site', SiteView, {
            subtitle: route.action
        });
        if (route.action !== 'login') {
//            this.checkSession();
            this.reuse('header', HeaderView);
            this.reuse('sidebar', SidebarView);
            this.reuse('footer', FooterView);
        }
    },
    checkSession: function () {
        if (localStorage.getItem('token') === undefined || localStorage.getItem('token') === null) {
            window.location.replace('login');
        }
    },
    // launch app by displaying projects
    dashboard: function (params, route, options) {
        params.seedId = 'rosewright623@gmail.com';
        var seedSummary = new SeedMonitorCollection(null, params);
        seedSummary.fetch();
        this.reuse('dashboard', DashboardView, {
            seedSummary: seedSummary
        });
    },
    login: function (params, route, options) {
        this.reuse('login', LoginView);
    }

});
module.exports = DeliveryController;

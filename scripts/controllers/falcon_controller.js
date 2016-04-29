'use strict';

var Chaplin = require('chaplin'),
    $ = require('jquery'),
    SiteView = require('../views/site'),
    HeaderView = require('../views/partials/header'),
    SidebarView = require('../views/partials/sidebar'),
    FooterView = require('../views/partials/footer'),
    IndexView = require('../views/dashboard/index'),
    MailSummaryCollection = require('../collections/mail_summary');

var FalconController = Chaplin.Controller.extend({
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
    // launch app by displaying projects
    dashboard: function (params, route, options) {
        var mailSummary = new MailSummaryCollection();
        mailSummary.fetch();
        this.reuse('dashboard', IndexView, {
            mailSummary: mailSummary 
        });
    }

});
module.exports = FalconController;

'use strict';

var View = require('../view'),
    _ = require('underscore'),
    $ = require('jquery'),
    config = require('../../config'),
    SeedsMonitorView = require('./seedsmonitor'),
    ClientSeedsMonitorView = require('./clientseedsmonitor'),
    template = require('../../templates/delivery/dashboard.hbs');

var els = {
    seedSummary: '#seed-summary',
    clientSeedSummary: '#client-seed-summary'
};

var DashboardView = View.extend({
    template: template,
    region: 'content',
    className: 'page-content-wrapper',
    initialize: function (options) {
        View.prototype.initialize.call(this);
        this.seedSummary = options.seedSummary;
        console.log(config);
        this.listenTo(this.seedSummary, 'sync', this.render);
        this.listenTo(this.seedSummary, 'sync', this.renderSeedSummary);
//        this.listenTo(this.seedSummary, 'sync', this.renderClientSeedSummary);
    },
    getTemplateData: function () {
        var data = View.prototype.getTemplateData.call(this);
        data = _.extend(data, {
            deliveryStats: this.seedSummary.getStats()
        });
        return data;
    },
    renderSeedSummary: function () {
        this.subview('seedsMonitorView', new SeedsMonitorView({
            collection: this.seedSummary,
            el: $(els.seedSummary)
        }));
    },
//    renderClientSeedSummary: function() {
//        var data = this.seedSummary.getClientSeedMonitor();
//        console.log(data);
//        this.subview('clientSeedsMonitorView', new ClientSeedsMonitorView({
//            collection: data,
//            el: $(els.clientSeedSummary)
//        }));
//    }
});

module.exports = DashboardView;

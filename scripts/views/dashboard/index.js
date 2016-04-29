'use strict';

var View = require('../view'),
    $ = require('jquery'),
    MailsSummaryView = require('./mails_summary'),
    template = require('../../templates/dashboard/index.hbs');

var els = {
    mailSummary: '#mail-summary'
};

var IndexView = View.extend({
    template: template,
    region: 'content',
    className: 'page-content-wrapper',
    initialize: function (options) {
        View.prototype.initialize.call(this);
        this.mailSummary = options.mailSummary;
        this.listenTo(this.mailSummary, 'sync', this.renderMailSummary);
    },
    renderMailSummary: function () {
        this.subview('mailsSummaryView', new MailsSummaryView({
            collection: this.mailSummary,
            el: $(els.mailSummary)
        }));
//        new MailsSummaryView({
//            el: this.$(els.mailSummary)
//        });
    }
});

module.exports = IndexView;

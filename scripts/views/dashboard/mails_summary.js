'use strict';

var CollectionView = require('../collection_view'),
    MailSummaryView = require('./mail_summary'),
    template = require('../../templates/dashboard/mails_summary.hbs');

var els = {
  listSelector: '#summary-container tbody'  
};
var MailsSummary = CollectionView.extend({
    template: template,
    itemView: MailSummaryView,
    listSelector: els.listSelector,
    initialize: function () {
        console.log('tested mails summary');
    }
});

module.exports = MailsSummary;


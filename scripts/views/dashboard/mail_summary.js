'use strict';

var View = require('../view'),
    template = require('../../templates/dashboard/mail_summary.hbs');

var MailSummary = View.extend({
   template: template,
   tagName: 'tr'
});

module.exports = MailSummary;

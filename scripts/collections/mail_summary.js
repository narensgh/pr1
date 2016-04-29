'use strict';
var Chaplin = require('chaplin');

var MailSummary = Chaplin.Collection.extend({
   url:'dashboard/getmailsummary',
   parse: function(resp) {
       return resp.mailSummary;
   }
   
});

module.exports = MailSummary;

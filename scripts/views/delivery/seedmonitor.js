'use strict';

var View = require('../view'),
    template = require('../../templates/delivery/seedmonitor.hbs');

var SeedMonitor = View.extend({
   template: template,
   tagName: 'tr'
});

module.exports = SeedMonitor;

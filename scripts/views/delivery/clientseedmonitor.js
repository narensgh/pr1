'use strict';

var View = require('../view'),
    template = require('../../templates/delivery/clientseedmonitor.hbs');

var ClientSeedMonitor = View.extend({
   template: template,
   tagName: 'tr'
});

module.exports = ClientSeedMonitor;

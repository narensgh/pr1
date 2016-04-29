'use strict';

var CollectionView = require('../collection_view'),
    ClientSeedMonitorView = require('./clientseedmonitor'),
    template = require('../../templates/delivery/clientseedsmonitor.hbs');

var els = {
    listSelector: '#client-summary-container tbody',
    loading: '#loading-container'
};
var ClientSeedsMonitor = CollectionView.extend({
    template: template,
    itemView: ClientSeedMonitorView,
    listSelector: els.listSelector,
    loadingSelector: els.loading
});

module.exports = ClientSeedsMonitor;


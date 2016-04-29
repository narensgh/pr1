'use strict';

var CollectionView = require('../collection_view'),
    SeedMonitorView = require('./seedmonitor'),
    template = require('../../templates/delivery/seedsmonitor.hbs');

var els = {
    listSelector: '#summary-container tbody',
    loading: '#loading-container'
};
var SeedsMonitor = CollectionView.extend({
    template: template,
    itemView: SeedMonitorView,
    listSelector: els.listSelector,
//    loadingSelector: els.loading
});

module.exports = SeedsMonitor;


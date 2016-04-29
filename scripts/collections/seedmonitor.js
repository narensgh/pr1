'use strict';
var _ = require('underscore'),
    Collection = require('./collection');
var SeedMonitor = Collection.extend({
    url: function () {
        return this.getApiUrl() + 'seedmonitor';
    },
    initialize: function (models, options) {
        Collection.prototype.initialize.apply(this, arguments);
        this.seedId = options.seedId;
    },
    fetch: function (options) {
        options = _.extend(options || {}, {
            data: _.defaults(options && options.data || {}, _.pick(this, 'seedId'))
        });
        return Collection.prototype.fetch.call(this, options);
    },
    parse: function (resp) {
        return resp;
    },
    getStats: function (collection) {
        var total = 0,
            stats = {},
            groupedData = _.groupBy(this.models, function (row) {
                total++;
                return row.get('location');
            });
        stats.INBOX = 0, stats.SPAM = 0;
        _.each(groupedData, function (data, index) {
            stats[index] = _.size(data);
        });
        stats.SENT = total;
        stats.groupedData = groupedData;
        return stats;
    },
    getClientSeedMonitor: function () {
        var groupedData = _.groupBy(this.models, function (row) {
            return row.get('clientid');
        });
        var clientData = [];
        _.each(groupedData, function (data, index) {
            clientData[index] = [];
            _.each(data, function (message, ind) {
                var envelope = message.get('envelope');
                var location = message.get('location');
                clientData[index][envelope] = [];
                if(location === 'INBOX') {
                    clientData[index][envelope][location] = clientData[index][envelope][location] + 1;
                }
                if(location === 'SPAM') {
                    clientData[index][envelope][location] = clientData[index][envelope][location] + 1;
                }
            });

        });
//        console.log(clientData);
        return clientData;
    }
});
module.exports = SeedMonitor;

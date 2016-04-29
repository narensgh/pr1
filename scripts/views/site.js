'use strict';


var _ = require('underscore'),
    View = require('./view'),
    template = require('../templates/site.hbs');

var SiteView = View.extend({
    template: template,
    container: 'body',
    id: 'page',
    regions: {
        header: '#header',
        sidebar: '#sidebar',
        content: '#page-content',
        footer: '#footer'
    },
    initialize: function(options) {
        View.prototype.getTemplateData.call(options);
        this.subtitle = options.subtitle;
    },
    getTemplateData: function(){
        var data = View.prototype.getTemplateData.call(this);
        data = _.extend(data,{
            subtitle: this.subtitle
        });
        return data;
    }
});

module.exports = SiteView;

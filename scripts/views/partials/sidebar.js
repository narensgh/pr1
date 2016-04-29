'use strict';

var View = require('../view'),
    template = require('../../templates/partials/sidebar.hbs');

var SidebarView = View.extend({
    template : template,
    region: 'sidebar',
    className: 'page-sidebar-wrapper'
});

module.exports = SidebarView;

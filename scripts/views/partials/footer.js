'use strict';

var View = require('../view'),
    template = require('../../templates/partials/footer.hbs');

var FooterView = View.extend({
    template : template,
    region: 'footer',
    className: 'page-footer'
});

module.exports = FooterView;


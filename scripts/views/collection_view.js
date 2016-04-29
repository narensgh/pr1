'use strict';

var Chaplin = require('chaplin');

var CollectionView = Chaplin.CollectionView.extend({
    getTemplateFunction: function () {
        return this.template;
    }
});

module.exports = CollectionView;

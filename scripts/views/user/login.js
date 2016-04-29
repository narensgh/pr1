'use strict';
var Chaplin = require('chaplin'),
    View = require('../view'),
    md5 = require('js-md5'),
    UserModel = require('../../models/user'),
//    MessageView = require('../partials/delivery/message'),
    template = require('../../templates/user/login.hbs'),
    _ = require('underscore'),
    els = {
        emailId: "#username",
        password: "#password",
        login: "#login",
        message: '#message'
    };
var LoginView = View.extend({
    template: template,
    region: 'content',
    noWrap: true,
    events: {
        'click #login': 'login'
    },
    initialize: function (params) {
        View.prototype.initialize.call(this);
        this.userModel = new UserModel();
        this.listenTo(this.userModel, 'sync', this.checkLogin);
    },
    login: function () {
//        this.subview('messageView').clearMessage();
        var emailId = this.$(els.emailId).val(),
            password = this.$(els.password).val() ? md5(this.$(els.password).val()) : '';
        if (this.validateRequest()) {
            this.userModel.fetch({
                data: {
                    username: emailId,
                    password: password
                }
            });
        }
    },
    render: function () {
        View.prototype.render.call(this);
//        this.subview('messageView', new MessageView({el: this.$(els.message)}));
    },
    validateRequest: function () {
        var validationError = [];
        if (!this.$(els.password).val()) {
            validationError.push('blankPassword');
        }
        if (!this.$(els.emailId).val()) {
            validationError.push('blankEmail');
        }
        if (!_.isEmpty(validationError)) {
            console.log('Invalid Input');
//            this.subview('messageView').displayMessage(validationError, 'alert-error');
        } else {
            return true;
        }
    },
    checkLogin: function () {
        if (this.userModel.get('token') !== undefined) {
            this.setLocalStorage();
            this.redirectTo('delivery', 'dashboard');
        } else {
//            this.subview('messageView').displayMessage(['InvalidLoginDetails'], 'alert-error');
            console.log('Invalid username and password');
        }
    },
    setLocalStorage: function () {
        localStorage.setItem("token", this.userModel.get('token'));
        localStorage.setItem("username", this.userModel.get('username'));
        localStorage.setItem("peopleName", this.userModel.get('username'));
        localStorage.setItem("userId", this.userModel.get('loginId'));
    }

});
module.exports = LoginView;
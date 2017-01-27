import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './main.html';
import '../imports/ui/tutorial.html';
import '../imports/ui/chat.html';
import '../imports/ui/general_info.html'

import '../imports/ui/chat.js';

import '../imports/stylesheets/main.css';
import '../imports/stylesheets/chat.css';

Session.setDefault("page", "home");


Template.body.helpers ({
    currentPage: function(page) {
	return Session.get("page")
    },
});

Template.body.events ({
    'click #home_page': function() {
        Session.set("page", "home");
    },
    'click #basic_files': function() {
        Session.set("page", "files");
    },
    'click #basic_html': function() {
        Session.set("page", "html");
    },
    'click #basic_css': function() {
        Session.set("page", "css");
    },
    'click #basic_javascript': function() {
        Session.set("page", "javascript");
    },
    'click #tutorial_page': function() {
        Session.set("page", "tutorial_01");
    },
    'click #tutorial_02': function() {
	Session.set("page", "tutorial_02");
    },
    'click #tutorial_03': function() {
	Session.set("page", "tutorial_03");
    },
    'click #actual_page': function() {
        Session.set("page", "page");
    },
    'click #install_page': function() {
        Session.set("page", "installation");
    },
    'click #credits_page': function() {
	Session.set("page", "credits");
    },
    'click #conclusion_page': function() {
	Session.set("page", "conclusion");
    },

});

Template.tutorial_01.events ({
    'click': function() {
    Session.set("page", "tutorial_02");
    }
});

Template.tutorial_02.events ({
    'click': function() {
    Session.set("page", "tutorial_03");
    }
});



/* jshint node: true */
'use strict';

var commands = require('./lib/commands');

module.exports = {
  name: 'ember-cowsay',

  included: function(app) {
    app.import('vendor/ember-cowsay.css');
  },

  includedCommands: function() {
    return commands;
  },
};
  

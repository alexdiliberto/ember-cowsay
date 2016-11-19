/* jshint node: true */
'use strict';

var commands = require('./lib/commands');

module.exports = {
  name: 'ember-cowsay',

  includedCommands: function() {
    return commands;
  },
};
  

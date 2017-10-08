/* eslint-env node */
'use strict';

var Command = require('ember-cli/lib/models/command');
var CowsayTask = require('../tasks/cowsay');

module.exports = Command.extend({
  name: 'cowsay',
  description: '1)Ember.JS  2)Cowsay  3)????  4)Profit!!!!',
  works: 'everywhere',

  run: function() {
    var cowsay = new CowsayTask({
      ui: this.ui
    });

    return cowsay.run();
  }
});

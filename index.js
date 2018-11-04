'use strict';

const commands = require('./lib/commands');

module.exports = {
  name: require('./package').name,

  included(app) {
    app.import('vendor/ember-cowsay.css');
  },

  includedCommands() {
    return commands;
  },
};

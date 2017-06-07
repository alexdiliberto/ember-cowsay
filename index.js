/* eslint-env node */
'use strict';

const commands = require('./lib/commands');

module.exports = {
  name: 'ember-cowsay',

  included(app) {
    app.import('vendor/ember-cowsay.css');
  },

  includedCommands() {
    return commands;
  },
};

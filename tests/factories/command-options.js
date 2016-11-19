'use strict';

var defaults      = require('ember-cli-lodash-subset').defaults;
var MockUI        = require('../helpers/mock-ui');
var MockAnalytics = require('../helpers/mock-analytics');

module.exports = function CommandOptionsFactory(options) {
  options = options || {};
  return defaults(options, {
    ui:        new MockUI(),
    analytics: new MockAnalytics(),
    tasks:     {},
    commands:  {},
    settings:  {}
  });
};

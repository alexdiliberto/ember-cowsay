'use strict';

module.exports = MockAnalytics;
function MockAnalytics() {
  this.tracks = [];
}

MockAnalytics.prototype = Object.create({});
MockAnalytics.prototype.track = function(arg) {
  this.tracks.push(arg);
};

MockAnalytics.prototype.constructor = MockAnalytics;

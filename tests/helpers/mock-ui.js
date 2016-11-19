'use strict';

var through = require('through');

var DEFAULT_WRITE_LEVEL = 'INFO';

function UI(options) {
  this.through  = require('through');

  // Output stream
  this.actualOutputStream = options.outputStream;
  this.outputStream = this.through(function(data) {
    this.emit('data', data);
  });

  this.outputStream.setMaxListeners(0);
  this.outputStream.pipe(this.actualOutputStream);

  this.inputStream = options.inputStream;
  this.errorStream = options.errorStream;

  this.errorLog = options.errorLog || [];
  this.writeLevel = options.writeLevel || DEFAULT_WRITE_LEVEL;
  this.ci = !!options.ci;
}

UI.prototype.WRITE_LEVELS = {
  'DEBUG': 1,
  'INFO': 2,
  'WARNING': 3,
  'ERROR': 4
};

UI.prototype.write = function(data, writeLevel) {
  if (writeLevel === 'ERROR') {
    this.errorStream.write(data);
  } else if (this.writeLevelVisible(writeLevel)) {
    this.outputStream.write(data);
  }
};

UI.prototype.writeLevelVisible = function(writeLevel) {
  var levels = this.WRITE_LEVELS;
  writeLevel = writeLevel || DEFAULT_WRITE_LEVEL;

  return levels[writeLevel] >= levels[this.writeLevel];
};

module.exports = MockUI;
function MockUI(options) {
  UI.call(this, {
    inputStream: through(),
    outputStream: through(function(data) {
      if (options && options.outputStream) {
        options.outputStream.push(data);
      }
      this.output += data;
    }.bind(this)),
    errorStream: through(function(data) {
      this.errors += data;
    }.bind(this))
  });

  this.output = '';
  this.errors = '';
  this.errorLog = options && options.errorLog || [];
}

MockUI.prototype = Object.create(UI.prototype);
MockUI.prototype.constructor = MockUI;
MockUI.prototype.clear = function() {
  this.output = '';
  this.errors = '';
  this.errorLog = [];
};

'use strict';

var Task = require('ember-cli/lib/models/task');
var fs = require('fs');
var path = require('path');
var EOL = require('os').EOL;
var cowsay = require('cowsay');

module.exports = Task.extend({
  run: function() {
    var filePath = path.join(__dirname, '../utils/phrases.txt');
    var data = fs.readFileSync(filePath, 'utf8').toString();
    var lines = data.split(EOL).filter(Boolean);
    var cowsayPhrase = lines[Math.floor(Math.random() * lines.length)];

    this.ui.write(cowsay.say({
      text: cowsayPhrase
    }));
  }
});

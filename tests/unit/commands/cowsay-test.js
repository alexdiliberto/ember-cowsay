'use strict';

const expect         = require('chai').expect;
const EOL            = require('os').EOL;
const commandOptions = require('../../factories/command-options');
const CowsayCommand  = require('../../../lib/commands/cowsay');

/*
 -----------------------
< Data down, actions up >
 -----------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
*/

describe('cowsay command', function() {
  let options;
  let command;

  beforeEach(function() {
    options = commandOptions({
      project: {
        isEmberCLIProject() {
          return false;
        }
      }
    });

    command = new CowsayCommand(options);
  });

  it('runs the cowsay command', function() {
    return command.validateAndRun().then(() => {
      let lines = options.ui.output.split(EOL);

      expect(someLineStartsWith(lines, ' _'), '1st and 3rd lines').to.be.ok;
      expect(someLineStartsWith(lines, '< '), '2nd line').to.be.ok;
      expect(someLineStartsWith(lines, '        \\   ^__^'), '4th line').to.be.ok;
      expect(someLineStartsWith(lines, '         \\  (oo)\\_______'), '5th line').to.be.ok;
      expect(someLineStartsWith(lines, '            (__)\\       )\\/\\'), '6th line').to.be.ok;
      expect(someLineStartsWith(lines, '                ||----w |'), '7th line').to.be.ok;
      expect(someLineStartsWith(lines, '            (__)\\       )\\/\\'), '8th line').to.be.ok;
      expect(someLineStartsWith(lines, '                ||     ||'), '9th line').to.be.ok;
    });
  });
});

let someLineStartsWith = (lines, search) => {
  return lines.some(function(line) {
    return line.indexOf(search) === 0;
  });
}

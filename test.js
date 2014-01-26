var TextAbbrev = require('./lib/index.js');

var abbrev = new TextAbbrev([ "test", "testing", "tester"]);

console.log(abbrev.find('tes'));
console.log(abbrev.find('testi'));
console.log(abbrev.dump());

Description
----
Find explicit abbreviations from a list of words

For example:

The words ***test*** and ***testing*** both have the ambiguous abbreviation: ***tes***

#####Installation:
```sh
npm install text-abbrev
```

#####Usage:
```javascript
var TextAbbrev = require('text-abbrev');

var textabbr = new TextAbbrev([ "test", "testing"]);

abbrev.find('tes')
//null (ambiguous)

abbrev.find('test')
//test

abbrev.find('testi')
//testing

abbrev.dump();
{ testin: 'testing',
  testi: 'testing',
  teste: 'tester',
  test: 'test',
  testing: 'testing',
  tester: 'tester' }
 
 ```
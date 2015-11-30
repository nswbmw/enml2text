'use strict';

const assert = require('assert');
const enml2text = require('../lib/enml2text');

assert.equal(enml2text('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">\n<en-note>\n<div>## enml2text</div>\n<div><br/></div>\n<div>parse ENML to TEXT.</div>\n<div><br/></div>\n<div>### Install</div>\n<div><br/></div>\n<div>    $ npm i enml2text  --save</div>\n<div><br/></div>\n<div>### License</div>\n<div><br/></div>\n<div>MIT</div>\n</en-note>\n'), '## enml2text\n\nparse ENML to TEXT.\n\n### Install\n\n    $ npm i enml2text  --save\n\n### License\n\nMIT');

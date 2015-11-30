'use strict';

const htmlparser = require('htmlparser2');

module.exports = function html2text(enml) {
  let _text = '';
  let parser = new htmlparser.Parser({
    ontext: function (text) {
      _text += text;
    }
  });
  parser.end(enml);

  _text = _text.trim().replace(/[\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]/g, ' ');
  return _text;
};

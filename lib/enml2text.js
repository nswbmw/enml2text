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
  return _text.trim();
};

## enml2text

parse ENML to TEXT. Only for plain text writed in your evernote.

### Install

    $ npm i enml2text --save

### Example

```
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n
<!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">\n
<en-note>\n
  <div>## enml2text</div>\n
  <div><br/></div>\n
  <div>parse ENML to TEXT.</div>\n
  <div><br/></div>\n
  <div>### Install</div>\n
  <div><br/></div>\n
  <div>    $ npm i enml2text  --save</div>\n
  <div><br/></div>\n
  <div>### License</div>\n
  <div><br/></div>\n
  <div>MIT</div>\n
</en-note>\n
```

Will convert to:

```
## enml2text

parse ENML to TEXT.

### Install

    $ npm i enml2text  --save

### License

MIT
```

### Test

```
npm test
```

### License

MIT

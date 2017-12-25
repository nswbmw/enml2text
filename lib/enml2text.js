module.exports = function enml2text (enml) {
  let text = enml || ''
  text = text.replace(/(\r\n|\n|\r)/gm, ' ')
  text = text.replace(/(<\/(div|ui|li|p|table|tr|dl)>)/ig, '\n')
  text = text.replace(/^\s/gm, '')
  text = text.replace(/(<(li)>)/ig, ' - ')
  text = text.replace(/(<([^>]+)>)/ig, '')
  // replace \s(except \n) to space
  text = text.replace(/\s/g, (match) => {
    if (match === '\n') {
      return '\n'
    }
    return ' '
  })
  text = text.trim()

  return text
}

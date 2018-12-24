const EscapeHTMLMap = {
  ' ': '&nbsp;',
  '<': '&lt;',
  '>': '&gt',
  '{': `{ \r\n`,
  '}': '}'
}

const escapeHTML = (char: string) => EscapeHTMLMap[char]

export default escapeHTML
const EscapeHTMLMap = {
  ' ': '&nbsp;',
  '<': '&lt;',
  '>': '&gt',
  '{': `{ \r`,
  '}': '}'
}

const escapeHTML = (char: string) => EscapeHTMLMap[char]

export default escapeHTML
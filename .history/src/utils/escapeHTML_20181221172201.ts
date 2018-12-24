const EscapeHTMLMap = {
  ' ': '&nbsp;',
  '<': '&lt;',
  '>': '&gt',
  '{': '{',
  '}': '}'
}

const escapeHTML = (char: string) => EscapeHTMLMap[char]

export default escapeHTML
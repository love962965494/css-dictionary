const EscapeHTMLMap = {
  ' ': '&nbsp;',
  '<': '&lt;',
  '>': '&gt',
  '{': '{',
  '}': '&#125;'
}

const escapeHTML = (char: string) => EscapeHTMLMap[char]

export default escapeHTML
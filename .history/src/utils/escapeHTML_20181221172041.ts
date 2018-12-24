const EscapeHTMLMap = {
  ' ': '&nbsp;',
  '<': '&lt;',
  '>': '&gt',
  '{': '&#123;',
  '}': '&#125;'
}

const escapeHTML = (char: string) => EscapeHTMLMap[char]

export default escapeHTML
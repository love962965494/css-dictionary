const EscapeHTMLMap = {
  ' ': '&nbsp;'
}

const escapeHTML = (char: string) => EscapeHTMLMap[char]

export default escapeHTML
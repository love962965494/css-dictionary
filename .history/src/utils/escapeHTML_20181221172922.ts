// const EscapeHTMLMap = {
//   ' ': '&nbsp;',
//   '<': '&lt;',
//   '>': '&gt',
//   '{': `{ `,
//   '\r\n': '\r\n  ',
//   '}': '}'
// }

const escapeHTML = (char: string) => char.trim()

export default escapeHTML
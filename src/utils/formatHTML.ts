const formatHTML = (str: string) => {
  let result = str

  const match = result.match(/^[^\S\n]*(?=\S)/gm)

  const indent = match && Math.min(...match.map((el) => el.length))

  if (indent) {
    const reg = new RegExp(`^.{${indent}}`, 'gm')

    result = result.replace(reg, '')
  }

  return result.trim()
}

export default formatHTML

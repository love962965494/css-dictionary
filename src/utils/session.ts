const setItem = (key: string, value: string) => {
  window.sessionStorage.setItem(key, value)
}

const getItem = (key: string) => {
  return window.sessionStorage.getItem(key)
}

const removeItem = (key: string) => {
  window.sessionStorage.removeItem(key)
}

export {
  setItem,
  getItem,
  removeItem
}

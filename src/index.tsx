import * as React from 'react'
import Page from './Page'
import './index.css'
import { hydrate, render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import 'highlight.js/styles/github.css'
import { setItem } from 'utils/session'

const roorElement = document.getElementById('root')!

const renderPage = (Content: typeof Page) => {
  if (roorElement.hasChildNodes()) {
    return hydrate(<Content />, roorElement)
  } else {
    return render(<Content />, roorElement)
  }
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./Page.tsx', () => {
    const NextPage = require('./Page').default
    renderPage(NextPage)
  })
}

window.addEventListener('beforeunload', (ev) => {
  const oDiv = document.querySelector('#container > div')

  const pos = (oDiv && oDiv.scrollTop) || ''
  
  setItem('scrollTop', pos.toString())
})

renderPage(Page)
registerServiceWorker()

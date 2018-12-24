import * as React from 'react'
import Page from './Page'
import './index.css'
import { hydrate, render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'


hljs.initHighlightingOnLoad()

const resize = () => {
  const fontSize = ((document.body.clientWidth * 18) / 1920).toFixed(2) + 'px'

  document.documentElement!.style.fontSize = fontSize
}

window.addEventListener('resize', resize)

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

resize()
renderPage(Page)
registerServiceWorker()

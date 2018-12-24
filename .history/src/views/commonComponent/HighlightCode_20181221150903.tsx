import React, { ReactType } from 'react'
import hljs from 'highlight.js'

const highlightComponent = (WrapComponent: ReactType) => {
  hljs.initHighlightingOnLoad()

  return <WrapComponent />
}

export default highlightComponent

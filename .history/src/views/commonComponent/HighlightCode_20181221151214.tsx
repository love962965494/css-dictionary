import React, { ReactType, Component } from 'react'
import hljs from 'highlight.js'

const highlightComponent = (WrapComponent: ReactType) => {
  return class extends Component {
    public componentDidMount() {
      hljs.initHighlightingOnLoad()
    }

    public render() {
      return <WrapComponent />
    }
  }
}

export default highlightComponent

import React, { ReactType, Component } from 'react'
import hljs from 'highlight.js'

const highlightComponent = (WrapComponent: ReactType) => {
  return class extends Component {
    public componentDidMount() {
      console.log('哈哈哈')
      hljs.highlightBlock(document.querySelectorAll('pre code'))
    }

    public render() {
      return <WrapComponent />
    }
  }
}

export default highlightComponent

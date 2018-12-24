import React, { ReactType, Component } from 'react'
import hljs from 'highlight.js'

const highlightComponent = (WrapComponent: ReactType) => {
  return class extends Component {
    public componentDidMount() {
      console.log('哈哈哈')
      Array.prototype.forEach.call(document.querySelectorAll('pre code'), (block: any) => hljs.highlightBlock(block)
    }

    public render() {
      return <WrapComponent />
    }
  }
}

export default highlightComponent

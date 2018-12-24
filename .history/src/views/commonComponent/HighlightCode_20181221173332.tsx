import React, { ReactType, Component } from 'react'
import hljs from 'highlight.js'

hljs.configure({
  tabReplace: '    '
})

const highlightComponent = (WrapComponent: ReactType) => {
  return class extends Component {
    public componentDidMount() {
      Array.prototype.forEach.call(
        document.querySelectorAll('pre code'),
        (block: any) => hljs.highlightBlock(block)
      )
    }

    public render() {
      return <WrapComponent />
    }
  }
}

export default highlightComponent

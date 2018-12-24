import React, { ReactType, Component } from 'react'
import hljs from 'highlight.js'

const highlightComponent = (WrapComponent: ReactType) => {
  return class extends Component {
    public ref = React.createRef()
    public componentDidMount() {
      console.log(this.ref)
      Array.prototype.forEach.call(
        document.querySelectorAll('pre code'),
        (block: any) => hljs.highlightBlock(block)
      )
    }

    public render() {
      return <WrapComponent ref={this.ref} />
    }
  }
}

export default highlightComponent

import { Component } from 'react'
import hljs from 'highlight.js'

export default class HighlightCode extends Component {
  public componentDidMount() {
    hljs.initHighlightingOnLoad()
  }
  public render() {
    return this.props.children
  }
}

import React, { Component, ComponentType } from 'react'
import { Row } from 'antd'
import RoutesComponent from 'routes'
import styled from 'styled-components'
import hljs from 'highlight.js';

const LayoutContainer = styled(Row as ComponentType)`
  text-align: center;
`

interface IOwnProps {
  currentProperty: string
}

export default class Layout extends Component<IOwnProps> {
  
  public componentDidMount() {
    hljs.initHighlightingOnLoad()
  }

  public render() {
    return (
      <LayoutContainer>
        <RoutesComponent />
      </LayoutContainer>
    )
  }
}
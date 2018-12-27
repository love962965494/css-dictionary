import React, { Component } from 'react'
import RoutesComponent from 'routes'
import styled from 'styled-components'
import { getItem, setItem } from 'utils/session'
import { RouteComponentProps, withRouter } from 'react-router'

const LayoutContainer = styled.div`
  text-align: center;
`

interface IOwnProps extends RouteComponentProps {
  currentProperty: string
}

class Layout extends Component<IOwnProps> {
  public componentDidMount() {
    const pos = getItem('scrollTop') || ''
    const oDiv = document.querySelector('#container > div')
    if (oDiv) {
      oDiv.scrollTo(0, parseFloat(pos))
    }
  }

  public componentWillUnmount() {
    setItem('scrollTop', '0')
  }

  public render() {
    return (
      <LayoutContainer id="container">
        <RoutesComponent />
      </LayoutContainer>
    )
  }
}

export default withRouter(Layout)

import React from 'react'
import RoutesComponent from 'routes'
import styled from 'styled-components'
import rememberRoute from 'views/commonComponent/RememberRoute'

const LayoutContainer = styled.div`
  text-align: center;
`

function Layout() {
  return (
    <LayoutContainer id="container">
      <RoutesComponent />
    </LayoutContainer>
  )
}

export default rememberRoute(Layout)

import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledContainerComponent = styled.div<{ bgImage: any }>`
  width: 100vw;
  height: 100vh;
  background: ${(props) => `center url(${props.bgImage}) no-repeat`};
  background-size: cover;
  text-align: center;
  overflow: auto;
`

interface IStyledContainer {
  bgImage: any
  children?: ReactNode
}

const StyledContainer = ({ bgImage, children, ...rest }: IStyledContainer) => (
  <StyledContainerComponent bgImage={bgImage} {...rest}>
    {children}
  </StyledContainerComponent>
)

export default StyledContainer

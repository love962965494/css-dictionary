import React, { Component, ComponentType } from 'react'
import styled from 'styled-components'
import { Row } from 'antd'
import Header from 'views/layout/Header'
import CSSConfig, { ICSSSeriesProps, CSSReference } from 'routes/config'
import { Link } from 'react-router-dom'
import { CurrentPropertyContext, IPageStateProps, IChangeProperty } from 'Page'
import bg from 'assets/images/bg.png'
import flowerBorder from 'assets/images/flowerBorder.jpg'

const LayoutContainer = styled(Row as ComponentType)`
  min-height: 100vh;
  background: url(${bg}) left, url(${bg}) center, url(${bg}) right;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
`

const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-column-gap: 8rem;
  grid-row-gap: 1rem;
  padding: 0;
`

const StyledListItem = styled.li`
  grid-column: span 3;
  justify-self: center;
  width: 27.5rem;
  padding: 8px;
  font-weight: 500;
  cursor: pointer;
  background: url(${flowerBorder}), linear-gradient(#f00, #00f);
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: screen;
  mix-blend-mode: multiply;
  &:nth-of-type(3n + 1) {
    margin-left: -1rem;
  }

  &:nth-of-type(3n + 2) {
    margin-left: 0.1875rem;
  }

  &:nth-of-type(3n) {
    margin-left: 1.25rem;
  }

  &:hover {
    mix-blend-mode: luminosity;
  }

  a {
    font-family: 'Gloria Hallelujah', cursive;
    color: #041ea2;
    text-decoration: none;
    transition: none;
  }
`

interface IPropertyProps {
  id: string
  title: string
  path: string
  color: string
  hoverColor: string
}

function CssSeries(
  propertyList: IPropertyProps[],
  clickHandler?: IChangeProperty,
  ...props: any[]
) {
  return (
    <Row
      style={{ padding: '20px', margin: '0 10px 2em' }}
    >
      <StyledList {...props}>
        {propertyList.map((property) => {
          if (clickHandler) {
            return (
              <StyledListItem
                key={property.id}
                onClick={clickHandler.bind(null, property.title)}
              >
                <Link to={property.path}>{property.title}</Link>
              </StyledListItem>
            )
          } else {
            return (
              <StyledListItem
                key={property.id}
              >
                <Link to={property.path}>{property.title}</Link>
              </StyledListItem>
            )
          }
        })}
      </StyledList>
    </Row>
  )
}

const CssSeriesCatalog = () =>
  CssSeries(
    Object.keys(CSSConfig).map((key) => {
      const config: ICSSSeriesProps = CSSConfig[key]

      return {
        id: config.id,
        path: config.path,
        title: key,
        color: config.color,
        hoverColor: config.hoverColor
      }
    })
  )

const PseudoClassConfig = CSSConfig[CSSReference.PSEUDOCLASS]
const CssSeriesPseudoClass = (
  { clickHandler }: { clickHandler: IChangeProperty },
  ...props: any[]
) =>
  CssSeries(
    PseudoClassConfig.properties.map((property) => {
      return {
        id: property.id,
        title: property.title,
        path: PseudoClassConfig.path + property.path,
        color: PseudoClassConfig.color,
        hoverColor: PseudoClassConfig.hoverColor
      }
    }),
    clickHandler,
    ...props
  )

export default class Layout extends Component {
  public render() {
    return (
      <CurrentPropertyContext.Consumer>
        {({ changeProperty }: IPageStateProps) => (
          <LayoutContainer>
            <Header />
            <CssSeriesCatalog />
            <CssSeriesPseudoClass clickHandler={changeProperty} />
          </LayoutContainer>
        )}
      </CurrentPropertyContext.Consumer>
    )
  }
}

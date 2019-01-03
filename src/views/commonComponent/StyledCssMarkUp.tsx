import React, { StatelessComponent, ReactNode } from 'react'
import styled from 'styled-components'

const CssProperty: StatelessComponent = ({ children }) => (
  <span className="css-property">{children}</span>
)

const CssDeclare: StatelessComponent = ({ children }) => (
  <span className="css-declare">{children}</span>
)

const CssClass: StatelessComponent = ({ children }) => (
  <span className="class-name">{children}</span>
)

const CodeContainer: StatelessComponent<{ type: string }> = ({
  children,
  type
}) => (
  <pre>
    <code className={type}>{children}</code>
  </pre>
)

const StyledFigure = styled.figure`
  padding: 2em;
  border: 1px solid #ccc;

  > img {
    max-width: 100%;
  }

  > figcaption {
    margin-top: 1.5em;
    text-align: center;
    font-style: italic;
    font-weight: bold;
    color: #697581;
  }
`

const ImageContainer: StatelessComponent<{
  title?: string
  des?: ReactNode
}> = ({ children, title, des }) => (
  <StyledFigure aria-describedby={title}>
    {children}
    <figcaption>{des}</figcaption>
  </StyledFigure>
)

const StyledH3 = styled.h2`
  padding: 10px;
  border-bottom: 3px solid #ccc;
  color: currentColor;
  font-size: 1.5em;
  font-weight: bold;
`

const SubTitle: StatelessComponent = ({ children }) => (
  <StyledH3>{children}</StyledH3>
)

export {
  CssProperty,
  CssDeclare,
  CssClass,
  CodeContainer,
  ImageContainer,
  SubTitle
}

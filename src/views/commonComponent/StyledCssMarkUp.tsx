import React, { StatelessComponent } from 'react'

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

export { CssProperty, CssDeclare, CssClass, CodeContainer }

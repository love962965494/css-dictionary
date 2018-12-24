import React, { Component } from 'react'
import CSSConfig, { CSSReference, ICSSSeriesProps } from './config'
import { Route, Switch } from 'react-router'

export function Loading() {
  return <div />
}

const renderRoute = (config: ICSSSeriesProps) => {
  const rootPath = config.path

  return config.properties.map((property) => {
    const path = rootPath + property.path
    if (property.component) {
      return (
        <Route
          key={path}
          exact={true}
          path={path}
          component={property.component}
        />
      )
    }

    return null
  })
}

export default class Routes extends Component {
  public render() {
    return (
      <Switch>
        {Object.keys(CSSConfig).map((key: CSSReference) =>
          renderRoute(CSSConfig[key])
        )}
      </Switch>
    )
  }
}

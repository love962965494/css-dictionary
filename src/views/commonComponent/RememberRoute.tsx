import React, { Component, ComponentType } from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { PrevRouteContext, IPageStateProps } from 'Page'
import { setItem, getItem } from 'utils/session'

function rememberRoute(WrappedComponent: ComponentType) {
  class RememberRoute extends Component<
    IPageStateProps & { currentRoute: string }
  > {
    public componentDidMount() {
      const { changeRoute, currentRoute, prevRoute } = this.props

      if (prevRoute && prevRoute !== currentRoute) {
        setItem('scrollTop', '0')
        changeRoute(currentRoute)
      }

      const pos = getItem('scrollTop') || ''
      const oDiv = document.querySelector('#container > div')
      if (oDiv) {
        oDiv.scrollTo(0, parseFloat(pos))
      }
    }

    public componentWillUnmount() {
      const { currentRoute, prevRoute } = this.props

      if (prevRoute && currentRoute !== prevRoute) {
        setItem('scrollTop', '0')
      } else {
        const oDiv = document.querySelector('#container > div')
        const pos = (oDiv && oDiv.scrollHeight) || ''

        setItem('scrollTop', pos.toString())
      }
    }

    public render() {
      return <WrappedComponent />
    }
  }

  function RememberRouteWithConsumer(props: RouteComponentProps) {
    return (
      <PrevRouteContext.Consumer>
        {({ prevRoute, changeRoute }: IPageStateProps) => (
          <RememberRoute
            currentRoute={props.location.pathname}
            prevRoute={prevRoute}
            changeRoute={changeRoute}
          />
        )}
      </PrevRouteContext.Consumer>
    )
  }

  return withRouter(RememberRouteWithConsumer)
}

export default rememberRoute

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from 'views/dashboard/Dashboard'
import App from './App'
import Page404 from 'views/errorPage/Page404'

const redirectToDashboard = () => <Redirect to="/dashboard" push={true} />

export const PrevRouteContext = React.createContext({})

export type IChangeRoute = (currentRoute: string) => void

export interface IPageStateProps {
  prevRoute: string
  changeRoute: IChangeRoute
}

export default class Page extends Component {
  public state: IPageStateProps

  constructor(props: any) {
    super(props)
    this.state = {
      prevRoute: '',
      changeRoute: this.changeRoute
    }
  }

  public changeRoute = (currentRoute: string) => {
    this.setState({
      prevRoute: currentRoute
    })
  }

  public render() {
    return (
      <PrevRouteContext.Provider value={this.state}>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" render={redirectToDashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/app" component={App} />
            <Route component={Page404} />
          </Switch>
        </BrowserRouter>
      </PrevRouteContext.Provider>
    )
  }
}

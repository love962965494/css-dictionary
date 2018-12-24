import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from 'views/dashboard/Dashboard'
import App from './App'
import Page404 from 'views/errorPage/Page404'

const redirectToDashboard = () => <Redirect to="/dashboard" push={true} />

export const CurrentPropertyContext = React.createContext({})

export type IChangeProperty = (currentProperty: string) => void

export interface IPageStateProps {
  currentProperty: string
  changeProperty: IChangeProperty
}

export default class Page extends Component {
  public state: IPageStateProps

  constructor(props: any) {
    super(props)
    this.state = {
      currentProperty: '',
      changeProperty: this.changeProperty
    }
  }

  public changeProperty = (currentProperty: string) => {
    this.setState({
      currentProperty
    })
  }

  public render() {
    return (
      <CurrentPropertyContext.Provider value={this.state}>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" render={redirectToDashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/app" component={App} />
            <Route component={Page404} />
          </Switch>
        </BrowserRouter>
      </CurrentPropertyContext.Provider>
    )
  }
}

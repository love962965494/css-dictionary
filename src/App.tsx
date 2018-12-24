import * as React from 'react'
import './App.css'
import Layout from 'views/layout/Layout'
import { CurrentPropertyContext, IPageStateProps } from 'Page'

class App extends React.Component {
  public render() {
    return (
      <CurrentPropertyContext.Consumer>
        {({ currentProperty }: IPageStateProps) => (
          <Layout currentProperty={currentProperty} />
        )}
      </CurrentPropertyContext.Consumer>
    )
  }
}

export default App

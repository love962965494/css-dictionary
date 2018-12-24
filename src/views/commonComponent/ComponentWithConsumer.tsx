import React, { ComponentClass, Component } from 'react'
import { CurrentPropertyContext, IPageStateProps } from 'Page'

export default function withConsumer(
  SubcribeComponent: ComponentClass,
  currentProperty: string
) {
  return class extends Component {
    public render() {
      return (
        <CurrentPropertyContext.Consumer>
          {({ changeProperty }: IPageStateProps) => {
            return (
              <ComponentWithConsumer {...{ changeProperty, currentProperty }}>
                <SubcribeComponent />
              </ComponentWithConsumer>
            )
          }}
        </CurrentPropertyContext.Consumer>
      )
    }
  }
}

interface IComponentWithConsumer {
  currentProperty: string
  changeProperty: (currentProperty: string) => void
}

// tslint:disable-next-line:max-classes-per-file
class ComponentWithConsumer extends Component<IComponentWithConsumer> {
  public componentDidMount() {
    this.props.changeProperty(this.props.currentProperty)
  }

  public render() {
    return this.props.children
  }
}

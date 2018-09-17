import * as React from 'react';

interface IHomeProps {
  showAbout?: boolean;
}

export default class Home extends React.PureComponent<IHomeProps, any> {
  public render() {
    return <div>show about ? {this.props.showAbout}</div>;
  }
}


import * as React from 'react';

interface IHomeProps {
  showAbout?: boolean;
  updateShowAbout: (value: boolean) => any;
}

export default class Home extends React.PureComponent<IHomeProps, any> {
  public render() {
    return <div>Home, {this.props.showAbout ? 'show about' : 'do not show about'}</div>;
  }

  public componentDidMount() {
    const { showAbout } = this.props;
    setTimeout(() => {
      this.props.updateShowAbout(!showAbout);
    }, 3000);
  }
}

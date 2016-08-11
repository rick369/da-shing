import React from 'react';

export default class Alert extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    bsStyle: React.PropTypes.string,
  };
  componentDidMount() {}
  render() {
    const { bsStyle } = this.props;
    return (
      <div className={`alert alert-${bsStyle}`} role="alert">
        {this.props.children}
      </div>
    );
  }
}

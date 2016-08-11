import React from 'react';
import classNames from 'classnames';

export default class Button extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    bsStyle: React.PropTypes.string,
    size: React.PropTypes.string,
  };
  componentDidMount() {}
  render() {
    const { bsStyle, size } = this.props;
    const buttonClass = classNames({
      btn: true,
      'btn-primary': bsStyle === 'primary',
      'btn-secondary': bsStyle === 'secondary',
      'btn-success': bsStyle === 'success',
      'btn-info': bsStyle === 'info',
      'btn-warning': bsStyle === 'warning',
      'btn-danger': bsStyle === 'danger',
      'btn-link': bsStyle === 'link',
      'btn-lg': size === 'lg',
      'btn-sm': size === 'sm',
    });
    return (
      <button type="button" className={buttonClass} >
        {this.props.children}
      </button>
    );
  }
}

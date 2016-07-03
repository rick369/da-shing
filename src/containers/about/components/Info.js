import React from 'react';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.props.onButtonClick();
  }
  render() {
    return (
      <div className="info">
        <h3>Info</h3>
        <p>Hello, my name is {this.props.name}.</p>
        <p>
          This is basic project, <button onClick={this.onButtonClick}>Click Me.</button>
        </p>
      </div>
    );
  }
}

Info.propTypes = {
  name: React.PropTypes.string,
  onButtonClick: React.PropTypes.func,
};

Info.defaultProps = {
  name: 'Ben',
};

export default Info;

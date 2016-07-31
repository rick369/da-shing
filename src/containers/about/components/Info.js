import React from 'react';

export default class Info extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
  };
  componentDidMount() {}
  render() {
    const { items } = this.props;
    return (
      <div className="info">
        <h3>Info</h3>
        {
          items.map((item) => <li key={`info-${item.id}`}>{item.text}</li>)
        }
      </div>
    );
  }
}

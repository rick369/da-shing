import React from 'react';

class Info extends React.Component {
  componentDidMount() {}
  render() {
    const { data } = this.props;
    return (
      <div className="info">
        <h3>Info</h3>
        {
          data.map((item) => <li key={`info-${item.id}`}>{item.text}</li>)
        }
      </div>
    );
  }
}

Info.propTypes = {
  data: React.PropTypes.array,
};

export default Info;

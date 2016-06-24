import React from 'react';

function HelloMessage({ name }) {
  return (
    <div className="hello-message">
      <span>
        Hello,
      </span>
      <span className="name">
        {name}.
      </span>
    </div>
  );
}

HelloMessage.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default HelloMessage;

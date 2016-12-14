import React from 'react';
import { connect } from 'react-redux';

import { SOCKET_HOST, SOCKET_PORT } from '../../../config';

import { addCharMessageText } from '../../actions/char';

function mapStateToProps(state) {
  return {
    char: state.char.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddCharMessageText({ text }) {
      dispatch(addCharMessageText({ text }));
    },
  };
}

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class Char extends React.Component {
  static propTypes = {
    char: React.PropTypes.object.isRequired,
    onAddCharMessageText: React.PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      messageInputText: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const { onAddCharMessageText } = this.props;
    // eslint-disable-next-line
    this.charSocket = io(`http://${SOCKET_HOST}:${SOCKET_PORT}/char`);
    this.charSocket.on('chat message', ({ text }) => {
      onAddCharMessageText({ text });
    });
  }
  componentWillUnmount() {
    this.charSocket.off('chat message');
  }
  handleSubmit(e) {
    e.preventDefault();

    const { messageInput } = this.refs;

    this.setState({
      messageInputText: '',
    });
    this.charSocket.emit('chat message', {
      text: messageInput.value,
    });
  }
  render() {
    const { charMessages } = this.props.char;
    const { messageInputText } = this.state;
    return (
      <div>
        <ul>
          {
            charMessages.map((char, index) => (
              <li key={`char-item-${index}`}>
                {char.text}
              </li>
            ))
          }
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            ref="messageInput"
            autoComplete="off"
            value={messageInputText}
            onChange={(e) => {
              this.setState({
                messageInputText: e.target.value,
              });
            }}
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

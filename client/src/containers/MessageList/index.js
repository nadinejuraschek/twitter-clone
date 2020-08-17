import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages, removeMessage } from '../../store/actions/messages';

// STYLES
import styles from './list.module.css';

// COMPONENTS
import MessageItem from '../../components/MessageItem';

// const MessageList = ({ messages, removeMessage, currentUser }) => {
//   useEffect(() => {
//     fetchMessages();
//   }, [messages]);

//   let messageList = messages.map(message => (
//     <MessageItem
//       key={message._id}
//       date={message.createdAt}
//       text={message.text}
//       username={message.user.username}
//       profileImageUrl={message.user.profileImageUrl}
//       removeMessage={removeMessage.bind(this, message.user._id, message._id)}
//       isCorrectUser={currentUser === message.user._id}
//     />
//   ));

//   return <ul>{messageList}</ul>;
// };

class MessageList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  };
  render() {
    const { messages, removeMessage, currentUser } = this.props;
    let messageList = messages.map(message => (
      <MessageItem
        key={message._id}
        date={message.createdAt}
        text={message.text}
        username={message.user.username}
        profileImageUrl={message.user.profileImageUrl}
        removeMessage={removeMessage.bind(this, message.user._id, message._id)}
        isCorrectUser={currentUser === message.user._id}
      />
    ));
    return <ul className={styles.list}>{messageList}</ul>
  };
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser.user.id,
  };
};

export default connect(mapStateToProps, { fetchMessages, removeMessage })(MessageList);
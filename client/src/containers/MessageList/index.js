import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../store/actions/messages';

// STYLES
import styles from './list.module.css';

// COMPONENTS
import MessageItem from '../../components/MessageItem';

const MessageList = ({ messages }) => {
  useEffect(() => {
    fetchMessages();
  }, []);

  let messageList = messages.map(message => (
    <MessageItem
      key={message._id}
      date={message.createdAt}
      text={message.text}
      username={message.user.username}
      profileImageUrl={message.user.profileImageUrl}
    />
  ));

  return messageList;
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
};

export default connect(mapStateToProps, { fetchMessages })(MessageList);
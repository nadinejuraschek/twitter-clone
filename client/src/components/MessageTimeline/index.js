import React from 'react';

// STYLES
import styles from './authform.module.css';

// COMPONENTS
import MessageList from '../../containers/MessageList';

const MessageTimeline = props => {
  return (
    <div className={styles.}>
      <MessageList />
    </div>
  );
};

export default MessageTimeline;
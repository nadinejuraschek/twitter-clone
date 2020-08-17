import React from 'react';

// STYLES
import styles from './timeline.module.css';

// COMPONENTS
import MessageList from '../../containers/MessageList';
import UserAside from '../UserAside';
import NewMessage from './NewMessage';

const MessageTimeline = ({ profileImageUrl, username }) => {
  return (
    <div className={styles.timeline}>
      <UserAside
        profileImageUrl={profileImageUrl}
        username={username}
      />
      <MessageList />
      <NewMessage />
    </div>
  );
};

export default MessageTimeline;
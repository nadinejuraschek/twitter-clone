import React from 'react';

// STYLES
import styles from './timeline.module.css';

// COMPONENTS
import MessageList from '../../containers/MessageList';
import UserAside from '../UserAside';

const MessageTimeline = ({ profileImageUrl, username }) => {
  return (
    <div className={styles.timeline}>
      <UserAside
        profileImageUrl={profileImageUrl}
        username={username}
      />
      <MessageList />
    </div>
  );
};

export default MessageTimeline;
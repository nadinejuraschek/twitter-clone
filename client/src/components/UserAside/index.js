import React from 'react';

// STYLES
import styles from './aside.module.css';

// COMPONENTS
import Profile from '../Profile';

const UserAside = ({ profileImageUrl, username }) => {
  return (
    <aside className={styles.aside}>
      <Profile profileImageUrl={profileImageUrl} username={username} height='20rem' width='20rem' />
      <h5 className={styles.name}>@{username}</h5>
    </aside>
  );
};

export default UserAside;

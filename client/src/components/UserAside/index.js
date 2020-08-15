import React from 'react';

// STYLES
import styles from './aside.module.css';

// IMAGES
import defaultProfile from '../../images/default-profile.png';

const UserAside = ({ profileImageUrl, username }) => {
  return (
    <aside className={styles.aside}>
      <div className={styles.profile}>
        <img
          src={profileImageUrl || defaultProfile}
          alt={username}
        />
      </div>
      <h5 className={styles.name}>
        @{username}
      </h5>
    </aside>
  );
};

export default UserAside;
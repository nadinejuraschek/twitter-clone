import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import defaultProfile from '../../images/default-profile.png';

// STYLES
import styles from './message.module.css';

// ICONS
import deleteIcon from '../../icons/delete.svg';

const MessageItem = ({ date, profileImageUrl, text, username, removeMessage, isCorrectUser }) => {
  return (
    <li>
      <div className={styles.timelineImg}>
        <img
          src={profileImageUrl || defaultProfile}
          alt="User Profile"
        />
      </div>
      <div className={styles.messageBody}>
        <Link to='/'>
          @{username} &nbsp;
          <span className={styles.date}>
            <Moment format="DD MMM YYYY">
              {date}
            </Moment>
          </span>
          <p>{text}</p>
          { isCorrectUser &&
            <button className={styles.delete} onClick={removeMessage}>
              <img src={deleteIcon} alt="Delete Message" />
            </button>
          }
        </Link>
      </div>
    </li>
  );
};

export default MessageItem;
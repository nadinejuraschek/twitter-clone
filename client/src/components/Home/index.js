import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import styles from './home.module.css';

// COMPONENTS
import MessageTimeline from '../MessageTimeline';

const Home = ({ currentUser }) => {
  if ( !currentUser.isAuthenticated ) {
    return (
      <div className={styles.landing}>
      <h1>What's Happening?</h1>
      <h4>New to Megaphone?</h4>
      <div>
        <Link className={styles.link} to='/register'>
          Sign Up Here
        </Link>
      </div>
      </div>
    );
  } else {
    return (
      <MessageTimeline
        profileImageUrl={currentUser.user.profileImageUrl}
        username={currentUser.user.username}
      />
    );
  };
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

// STYLES
import styles from './home.module.css';

const Home = () => {
  return (
    <>
      <h1>What's Happening?</h1>
      <h4>New to Megaphone?</h4>
      <div>
        <Link className={styles.link} to='/register'>
          Sign Up Here
        </Link>
      </div>
    </>
  );
};

export default Home;

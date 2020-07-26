import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// STYLES
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <Link to='/' className={styles.navbarBrand}>
        <img src='' alt='Home' />
      </Link>
      <ul className={styles.navlist}>
        <li>
            <Link to="/register">Register</Link>
        </li>
        <li>
            <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, null)(Navbar);

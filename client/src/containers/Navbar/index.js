import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../../store/actions/auth';

// COMPONENTS
import Icon from '../../components/Icon';

// STYLES
import styles from './navbar.module.css';

// ICONS
import megaphone from '../../icons/megaphone.svg';

const Navbar = ({ currentUser, signout }) => {
  const handleSignout = (event) => {
    event.preventDefault();
    signout();
  };

  return (
    <nav>
      <Link to='/' className={styles.navbarBrand}>
        <Icon icon={megaphone} iconName="Logo" />
      </Link>
      { currentUser.isAuthenticated
        ?
        <ul className={styles.navList}>
          <li>
            <Link to={`/users/${currentUser.user.id}/messages/new`}>
              New Message
            </Link>
          </li>
          <li>
            <button onClick={handleSignout}>
              Sign out
            </button>
          </li>
        </ul>
        :
        <ul className={styles.navlist}>
          <li>
              <Link to="/register">Register</Link>
          </li>
          <li>
              <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      }
    </nav>
  );
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
    };
};

export default connect(mapStateToProps, { signout })(Navbar);

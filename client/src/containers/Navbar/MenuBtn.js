import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../../store/actions/auth';

// COMPONENTS
import Icon from '../../components/Icon';

// STYLES
import styles from './navbar.module.css';

// ICONS
import menu from '../../icons/menu.svg';

const MenuBtn = ({ currentUser, signout, toggleNav, open }) => {
  const handleSignout = event => {
    event.preventDefault();
    signout();
  };

  return (
    <>
      <div className={styles.menuBtn} onClick={() => toggleNav()}>
        <Icon icon={menu} iconName='Menu' />
      </div>
      {!open ? null : (
        <ul className={styles.navDropdown}>
          {currentUser.isAuthenticated ? (
            <li className={styles.liDropdown} onClick={handleSignout}>
              Sign out
            </li>
          ) : (
            <>
              <li className={styles.liDropdown}>
                <Link to='/register'>Register</Link>
              </li>
              <li className={styles.liDropdown}>
                <Link to='/signin'>Sign In</Link>
              </li>
            </>
          )}
        </ul>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { signout })(MenuBtn);

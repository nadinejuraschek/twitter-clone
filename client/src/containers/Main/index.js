import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUser } from '../../store/actions/auth';
import { removeError } from '../../store/actions/errors';
import withAuth from '../../hocs/withAuth';

// COMPONENTS
import Home from '../../components/Home';
import AuthForm from '../../components/AuthForm';
import MessageForm from '../MessageForm';

// STYLES
import styles from './main.module.css';

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;

  return (
    <main className={styles.main}>
      <Switch>
        <Route exact path='/' render={props => <Home currentUser={currentUser} {...props} />} />

        <Route
          exact
          path='/signin'
          render={props => {
            return (
              <div className={styles.container}>
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText='Sign In'
                heading='Welcome Back!'
                {...props}
              />
              </div>
            );
          }}
        />
        <Route
          exact
          path='/register'
          render={props => {
            return (
              <div className={styles.container}>
              <AuthForm
                register
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText='Sign Me Up!'
                heading='Join Megaphone today.'
                {...props}
              />
              </div>
            );
          }}
        />
        <Route
          exact
          path='/users/:id/messages/new'
          component={withAuth(MessageForm)}
        />
      </Switch>
    </main>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
  };
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));

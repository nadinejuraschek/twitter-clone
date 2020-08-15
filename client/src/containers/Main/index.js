import React, { useState } from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUser } from '../../store/actions/auth';
import { removeError } from '../../store/actions/errors';

// COMPONENTS
import Home from '../../components/Home';
import AuthForm from '../../components/AuthForm';

// STYLES
import styles from './main.module.css';

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;

  return (
    <main>
      <Switch>
        <Route exact path='/' render={props => <Home currentUser={currentUser} {...props} />} />

        <Route
          exact
          path='/signin'
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText='Sign In'
                heading='Welcome Back!'
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path='/register'
          render={props => {
            return (
              <AuthForm
                register
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText='Sign Me Up!'
                heading='Join Megaphone today.'
                {...props}
              />
            );
          }}
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
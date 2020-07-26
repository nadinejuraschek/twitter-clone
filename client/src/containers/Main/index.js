import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUser } from '../../store/actions/auth';

// COMPONENTS
import Home from '../../components/Home';
import AuthForm from '../../components/AuthForm';

// STYLES
import styles from './main.module.css';

const Main = props => {
  const { authUser } = props;
  return (
    <main>
      <Switch>
        <Route exact path='/' render={props => <Home {...props} />} />

        <Route exact path='/signin' render={props => {
          return (
            <AuthForm onAuth={authUser} buttonText="Sign In" heading="Welcome Back!" {...props} />
          )
        }} />
        <Route exact path='/register' render={props => {
          return (
            <AuthForm register onAuth={authUser} buttonText="Sign Me Up!" heading="Join Megaphone today." {...props} />
          )
        }} />
      </Switch>
    </main>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default withRouter(connect(mapStateToProps, { authUser })(Main));

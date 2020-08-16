import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default function withAuth(ComponentToBeRendered) {
  const Authenticate = props => {
    useEffect(() => {
      if (props.isAuthenticated === false) {
        props.history.push('/signin');
      };
    }, [ props.isAuthenticated ]);

    return (
      <ComponentToBeRendered {...props} />
    );
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.currentUser.isAuthenticated,
    };
  };

  return connect(mapStateToProps)(Authenticate);
};
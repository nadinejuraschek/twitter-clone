import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';
import jwtDecode from 'jwt-decode';

// COMPONENTS
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

const store = configureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  try {
    // prevent manual tempering with jwtToken key in localStorage
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch(err) {
    store.dispatch(setCurrentUser({}));
  };
};

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;

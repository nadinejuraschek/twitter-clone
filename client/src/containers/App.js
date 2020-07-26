import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../store';

// COMPONENTS
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

const store = configureStore();

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

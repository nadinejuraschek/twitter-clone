import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../../store/actions/messages';

// STYLES
import styles from './messageform.module.css';

const MessageForm = ({ postNewMessage, errors, history }) => {
  const [ message, setMessage ] = useState('');

  const handleNewMessage = event => {
    event.preventDefault();
    postNewMessage(message);
    console.log(message);
    setMessage('');
    console.log(message);
    if (!errors) {
      history.push('/');
    };
  };

  return (
    <form onSubmit={handleNewMessage}>
      { errors.message && <div className={styles.alert}>{errors.message}</div> }
      <input
        type="text"
        className={styles.text}
        value={message}
        placeholder="Say what you need to say!"
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit" className={styles.button}>
        Done!
      </button>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
};

export default connect(mapStateToProps, { postNewMessage })(MessageForm);
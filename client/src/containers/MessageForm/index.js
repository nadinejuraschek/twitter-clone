import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postNewMessage } from '../../store/actions/messages';
import { removeError } from '../../store/actions/errors';

// STYLES
import styles from './messageform.module.css';

const MessageForm = ({ postNewMessage, errors, history, removeError }) => {
  const [ message, setMessage ] = useState('');

  const handleNewMessage = event => {
    event.preventDefault();
    postNewMessage(message);
    console.log(message);
    setMessage('');
    console.log(message);
    history.push('/');
  };

  history.listen(() => {
    removeError();
  });

  return (
    <div className={styles.container}>
    <h3 className={styles.heading}>New Message</h3>
    <form className={styles.form} onSubmit={handleNewMessage}>
      { errors.message && <div className={styles.alert}>{errors.message}</div> }
      <textarea
        className={styles.text}
        value={message}
        placeholder="Say what you need to say!"
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit" className={styles.button}>
        Done!
      </button>
    </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
  };
};

export default connect(mapStateToProps, { postNewMessage, removeError })(MessageForm);
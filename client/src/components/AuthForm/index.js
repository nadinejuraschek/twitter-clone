import React, { useState } from 'react';

// STYLES
import styles from './authform.module.css';

const AuthForm = ({ heading, buttonText, register, onAuth }) => {
  const [ newUser, setNewUser ] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    event.preventDefault();
    setNewUser({[event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const authType = register ? "register" : "signin";
    onAuth(authType, newUser).then(() => {
        console.log("Logged in successfully.");
    });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>{heading}</h2>
        <label htmlFor='email'>E-Mail:</label>
        <input
          className={styles.authInput}
          id='email'
          name='email'
          onChange={handleChange}
          type='text'
          value={newUser.email}
        />
        {register && (
            <>
                <label htmlFor='username'>Username:</label>
                <input
                className={styles.authInput}
                id='username'
                name='username'
                onChange={handleChange}
                type='text'
                value={newUser.username}
                />
                <label htmlFor='image-url'>Image Url:</label>
                <input
                className={styles.authInput}
                id='image-url'
                name='profileImageUrl'
                onChange={handleChange}
                type='text'
                value={newUser.profileImageUrl}
                />
            </>
        )}
        <label htmlFor='password'>Password:</label>
        <input
          className={styles.authInput}
          id='password'
          name='password'
          onChange={handleChange}
          type='password'
        //   value={newUser.password}
        />
        <button>{buttonText}</button>
      </form>
    </div>
  );
};

export default AuthForm;

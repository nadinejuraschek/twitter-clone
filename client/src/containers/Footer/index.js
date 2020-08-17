import React from 'react';

// STYLES
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Nadine Juraschek
    </footer>
  );
};

export default Footer;
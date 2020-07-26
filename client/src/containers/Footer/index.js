import React from 'react';

// STYLES
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer>
            <p className={styles.copyright}>
                © {new Date().getFullYear()} Nadine Juraschek
            </p>
        </footer>
    );
};

export default Footer;
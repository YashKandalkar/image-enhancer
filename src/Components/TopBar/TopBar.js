import React from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
    return (
        <div className={styles.main}>
            <div>
                <span className={styles.imageText}>IMAGE </span> 
                <span className={styles.enhancerText}>ENHANCER</span>
            </div>
        </div>
    )
}

export default TopBar;
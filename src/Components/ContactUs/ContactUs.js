import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = ({ color }) => {
    return (
        <div className={styles.main} style={{background: color==='dark'?'#121212':'#242424'}}>
            <div className={styles.devs}>
                <div className={styles.title}>
                    <span className={styles.imageText}>IMAGE </span> 
                    <span className={styles.enhancerText}>ENHANCER</span>
                </div>
                <div className={styles.names}>
                    <div className={styles.name}>
                        <span className={styles.text}>Yash Kandalkar</span>
                    </div>
                    <div className={styles.name}>
                        <span className={styles.text}>Akash Jaiswal</span>
                    </div>
                </div>
            </div>
            <div className={styles.references}>
                <div className={styles.refTitle}>
                    <span className={styles.text}>References</span> 
                </div>
                <div className={styles.names}>
                    <div className={styles.name}>
                        <span className={styles.text} 
                            onClick={() => window.open("https://arxiv.org/abs/1809.00219", '_blank')}
                        >
                            ESRGAN
                        </span>
                    </div>
                    <div className={styles.name}>
                        <span className={styles.text} 
                            onClick={() => window.open("https://github.com/xinntao/ESRGAN", '_blank')}
                        >
                            ESRGAN GitHub
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
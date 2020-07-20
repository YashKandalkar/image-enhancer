import React from 'react';
import styles from './Info.module.css';
import ill1 from '../../assets/illustration.png';
import { Link } from "react-router-dom";

const Info = () => {
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <div className={styles.title}>Enhance your images</div>
                <div className={styles.description}>
                    Increase the resolution of <br />
                    those low quality images <br />
                    to high definition in one click!
                </div>
                {/* <button 
                    onClick={() => window.open('/image-enhancer/enhance', '_parent')}
                > */}
                    <Link to='/image-enhancer/enhance' className={styles.tryItButton}>Try it now!</Link>
                {/* </button> */}
            </div>
            <div className={styles.imageHolder}>
                <img src={ill1} alt='illustration'/>
            </div>
        </div>
    )
}

export default Info;
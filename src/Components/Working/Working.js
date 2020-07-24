import React from 'react';
import styles from './Working.module.css';
import { 
    faBolt,
    faRupeeSign,
    faPaw
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Reveal from '../../Containers/Reveal/Reveal';

const Working = () => {
    return (
        <div className={styles.main}>
            <div className={styles.mainTitle}>
                Why <span className={styles.imageText}>IMAGE </span> 
                    <span className={styles.enhancerText}>ENHANCER</span>
                ?
            </div> 
            <div className={styles.gridContainer}>
                <div className={styles.container}>
                    <Reveal>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            Lightning fast
                            <FontAwesomeIcon 
                                icon={faBolt}
                                className={styles.icon}
                            />
                        </div>
                        <div className={styles.description}>
                            The image enhancing <br />
                            model used in here <br />
                            is optimized version of SRGAN
                        </div>
                    </div>
                    </Reveal>
                    <Reveal>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            Optimized for animals
                            <FontAwesomeIcon 
                                icon={faPaw}
                                className={styles.icon}
                            />
                        </div>
                        <div className={styles.description}>
                            The model is trained <br />
                            mostly on animals to <br />
                            cover every small detail
                        </div>
                    </div>
                    </Reveal>
                    <Reveal>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            Is it free
                            <FontAwesomeIcon 
                                icon={faRupeeSign}
                                className={styles.icon}
                            />
                        </div>
                        <div className={styles.description}>
                            Yes! This is a hobby <br />
                            project and is completely <br />
                            free to use!
                        </div>
                    </div>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default Working;
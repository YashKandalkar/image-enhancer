import React from 'react';
import styles from './ScrollToTop.module.css';
import { 
    faArrowCircleUp
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const onButtonClick = () => {
    let c = document.body.scrollTop || document.documentElement.scrollTop;
    let t = setInterval(() => {
        if(c>0){
            c -= 20;
            document.body.scrollTop = c; // For Safari
            document.documentElement.scrollTop = c; // For Chrome, Firefox, IE and Opera
        }
        else clearInterval(t);
    }, 1)
        
}

const ScrollToTop = ({ show }) => {
    return (
        show
        ?
        <div className={styles.main} onClick={onButtonClick}>
            <FontAwesomeIcon icon={faArrowCircleUp} size='4x'/>
        </div>
        :''
    )
}


export default ScrollToTop;
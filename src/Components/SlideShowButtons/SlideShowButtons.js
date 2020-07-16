import React from 'react';
import styles from './SlideShowButtons.module.css';

const SlideShowButtons = ({ pageCount, currPage }) => {
    let buttons = []
    for(let i = 0; i < pageCount; i++){
        buttons.push(
            {key: i}
        )
    }
    return (
        <div className={styles.main}>
            {
                buttons.map((el, i) => {
                    return(
                        <div 
                            key={i}
                            className={
                                (currPage===i)?styles.active:styles.inactive
                            }
                        >
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SlideShowButtons;
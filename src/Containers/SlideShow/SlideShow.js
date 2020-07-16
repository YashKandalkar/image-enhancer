import React from 'react';
import styles from './SlideShow.module.css';
import SlideShowButtons from '../../Components/SlideShowButtons/SlideShowButtons'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import images from './images';

const variants = {
  enter: (direction) => {
    return {
      x: '100%',
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: '-100%',
    };
  }
};

const transition= {
    duration: 0.5,
    ease: "easeInOut"
}
 
class SlideShow extends React.Component {
    constructor(){
        super()
        this.state = {
            page: 1,
            dir: 0,
            imageIndex: 0
        };
        this._isMounted = false;
    }

    componentDidMount(){
        this._isMounted = true;
        const t = setInterval(() => {
            if(this._isMounted){
                this.setState({
                    page: this.state.page+1, 
                    dir: 1, 
                    imageIndex: wrap(0, images.high.length, this.state.page)
                });
            }else clearInterval(t);
        }, 8000);
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
    
    render(){
        return (
            <div>
            <div className={styles.wrapper}>
                <AnimatePresence initial={false} custom={this.state.dir} >
                    <motion.div 
                        className={styles.container}
                        key={this.state.page}
                        custom={this.state.dir}
                        variants={variants}
                        transition={transition}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        <div className={styles.leftContainer}>
                            <div className={styles.bannerTitle}>
                                <span style={{color: '#e67e22'}}>
                                    {
                                        images.text[this.state.imageIndex].split(' ')[0]
                                    }
                                </span>
                                {
                                    ' ' + 
                                    images
                                        .text[this.state.imageIndex]
                                        .split(' ').splice(1)
                                        .join(' ')
                                }
                            </div>
                            {/*<div className={styles.leftImageContainer}>
                                <img
                                    src={images.low[this.state.imageIndex]}
                                    alt="low-res"
                                />
                            </div>*/}
                        </div>
                        <motion.img
                            src={images.high[this.state.imageIndex]}
                            className={styles.img}
                            alt="high-res"
                        />    

                    </motion.div>
                </AnimatePresence>
            </div>
                <SlideShowButtons 
                    pageCount={images.high.length} 
                    currPage={this.state.imageIndex}
                />
            </div>
        )
    }
}


export default SlideShow;
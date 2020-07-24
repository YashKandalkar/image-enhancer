import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion"

const variants = {
    show: {
        y: 0,
        opacity: 1
    },
    hide: {
        y: 150,
        opacity:0
    }
}

const Reveal = ({ children } ) => {
    const [state, setState] = useState({inView: false, mounted: false});
    let divRef = useRef(null);

    useEffect(() => {
        if(!state.mounted){
            window.addEventListener('scroll', () => {
                let rect = divRef.current.getBoundingClientRect();
                if (rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                ){
                    setState({inView: true});
                }
            })
            setState({mounted: true});
        }
    }, [divRef, state.mounted]);
    

    return (
        <motion.div 
            ref={divRef}
            animate={state.inView?'show':''}
            initial={'hide'}
            variants={variants}
            transition={{duration: 1}}
        >
            
            {children}
        </motion.div>
    )
}


export default Reveal;
import React from 'react';
import { motion } from 'framer-motion';

const PagesTransition = (props) => {    
    return (
        <motion.div className='transition' 
                    transition={{duration: .3}}
                    initial={{opacity: 0, scale: .5}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: .5}}>  
            {props.children}
        </motion.div>
    );
};

export default PagesTransition;
